// PDF to Image conversion (based on your resume-analyzer implementation)
let pdfjsLib = null;
let isLoading = false;
let loadPromise = null;

async function loadPdfJs() {
  if (pdfjsLib) return pdfjsLib;
  if (loadPromise) return loadPromise;

  isLoading = true;
  loadPromise = import('pdfjs-dist/build/pdf.mjs').then((lib) => {
    // Set the worker source to use CDN
    lib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js';
    pdfjsLib = lib;
    isLoading = false;
    return lib;
  }).catch(() => {
    // Fallback: disable worker completely
    console.warn('Failed to load PDF.js worker, disabling worker...');
    return import('pdfjs-dist').then((lib) => {
      lib.GlobalWorkerOptions.workerSrc = false;
      pdfjsLib = lib;
      isLoading = false;
      return lib;
    });
  });

  return loadPromise;
}

// Convert PDF to image (first page only, high quality) - based on your resume-analyzer
async function convertPdfToImage(file) {
  try {
    const lib = await loadPdfJs();
    
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await lib.getDocument({ data: arrayBuffer }).promise;
    const page = await pdf.getPage(1); // Get first page only for simplicity
    
    const viewport = page.getViewport({ scale: 4 }); // High scale for quality
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    
    if (context) {
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
    }
    
    await page.render({ canvasContext: context, viewport }).promise;
    
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            // Create a File from the blob with the same name as the pdf
            const originalName = file.name.replace(/\.pdf$/i, '');
            const imageFile = new File([blob], `${originalName}.png`, {
              type: 'image/png',
            });
            
            resolve({
              imageUrl: URL.createObjectURL(blob),
              file: imageFile,
              success: true
            });
          } else {
            resolve({
              imageUrl: '',
              file: null,
              success: false,
              error: 'Failed to create image blob'
            });
          }
          canvas.remove();
        },
        'image/png',
        1.0 // Maximum quality
      );
    });
  } catch (error) {
    console.error('PDF to image conversion failed:', error);
    return {
      imageUrl: '',
      file: null,
      success: false,
      error: `Failed to convert PDF: ${error.message}`
    };
  }
}

// Puter.js service for PDF operations and AI summarization
class PuterService {
  constructor() {
    this.isInitialized = false;
  }

  // Initialize Puter if not already done
  async initialize() {
    if (this.isInitialized) return;
    
    try {
      // Check if Puter is available
      if (typeof window.puter === 'undefined') {
        throw new Error('Puter.js is not loaded');
      }
      
      this.isInitialized = true;
      console.log('Puter service initialized');
    } catch (error) {
      console.error('Failed to initialize Puter:', error);
      throw error;
    }
  }

  // Load PDF.js library dynamically
  async loadPDFJS() {
    if (window.pdfjsLib) {
      return; // Already loaded
    }
    
    try {
      console.log('Loading PDF.js library...');
      
      // Load PDF.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
      
      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
      
      // Configure PDF.js worker
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 
          'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
        console.log('PDF.js loaded successfully');
      } else {
        throw new Error('PDF.js failed to load');
      }
      
    } catch (error) {
      console.error('Failed to load PDF.js:', error);
      throw new Error('Failed to load PDF.js library');
    }
  }

  // Extract text from PDF using proven PDF → Image → AI approach (from resume-analyzer)
  async extractTextFromFile(file) {
    try {
      await this.initialize();
      
      console.log('Using proven PDF → Image → AI approach for text extraction...');
      
      // Load PDF.js
      if (!window.pdfjsLib) {
        await this.loadPDFJS();
      }
      
      // Convert file to ArrayBuffer directly (don't upload and read back)
      const pdfData = await file.arrayBuffer();
      
      console.log('PDF data loaded, converting to images for AI text extraction...');
      
      // Load PDF document
      const pdf = await window.pdfjsLib.getDocument({ 
        data: pdfData,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
        cMapPacked: true
      }).promise;
      
      console.log(`PDF loaded with ${pdf.numPages} pages. Processing first 3 pages for text extraction...`);
      
      let allExtractedText = '';
      const maxPages = Math.min(pdf.numPages, 3); // Process first 3 pages for better extraction
      
      for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
        try {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 4.0 }); // High scale for better quality
          
          // Create canvas
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          // Render page to canvas
          await page.render({
            canvasContext: context,
            viewport: viewport
          }).promise;
          
          // Convert canvas to high-quality image
          const imageDataUrl = canvas.toDataURL('image/png', 1.0);
          
          console.log(`Page ${pageNum} converted to image, sending to Claude Sonnet for text extraction...`);
          
          // Send image to Puter AI for text extraction
          const prompt = `Please extract ALL text from this image. This is page ${pageNum} of a PDF document.

          Instructions:
          - Extract every word, number, and text element visible in the image
          - Maintain the reading order (top to bottom, left to right)
          - Include headings, paragraphs, bullet points, and all text content
          - Do NOT add explanations or commentary
          - Just return the raw extracted text

          Extract all text from this image:`;

          let pageText = '';
          try {
            // Try feedback method first
            const aiResponse = await window.puter.ai.feedback(imageDataUrl, prompt);
            if (aiResponse && aiResponse.message) {
              pageText = typeof aiResponse.message.content === 'string' 
                ? aiResponse.message.content 
                : aiResponse.message.content[0]?.text || '';
            }
          } catch (feedbackError) {
            console.log('Feedback method failed for page', pageNum, ', trying chat method...');
            // Fallback to chat method
            const aiResponse = await window.puter.ai.chat(prompt, {
              model: 'claude-3-5-sonnet'
            });
            pageText = typeof aiResponse === 'string' ? aiResponse : aiResponse.text || aiResponse.content || '';
          }
          
          if (pageText && pageText.length > 10) {
            allExtractedText += `\n--- Page ${pageNum} ---\n${pageText}\n`;
            console.log(`Page ${pageNum} text extracted: ${pageText.length} characters`);
          }
          
          // Clean up canvas
          canvas.remove();
          
        } catch (pageError) {
          console.error(`Error processing page ${pageNum}:`, pageError);
        }
      }
      
      if (!allExtractedText || allExtractedText.length < 50) {
        console.warn('No meaningful text extracted from PDF using image method');
        return null;
      }
      
      console.log(`Text extraction completed with Claude Sonnet. Total length: ${allExtractedText.length} characters from ${maxPages} pages`);
      return allExtractedText.trim();
      
    } catch (error) {
      console.error('PDF text extraction failed:', error);
      return null;
    }
  }

  // Summarize PDF content using Puter AI's direct PDF reading with Claude Sonnet
  async summarizePDF(documentUrl) {
    await this.initialize();
    
    try {
      console.log('Starting direct PDF summarization with Claude Sonnet...');
      
      // Extract filename from URL
      const filename = this.extractFilenameFromUrl(documentUrl);
      
      // Use Puter AI with Claude Sonnet to directly read and summarize the PDF
      const prompt = `Please read this PDF document and provide a comprehensive summary.

Instructions:
- Read the entire PDF document
- Extract key information, main topics, and important details
- Provide a well-structured summary
- Focus on the document's purpose, main points, and conclusions

Please structure your summary with:
1. Document Overview/Purpose
2. Key Points and Main Topics  
3. Important Details and Findings
4. Conclusions/Takeaways

Please read the PDF and provide the summary:`;

      // Try the feedback method first (as used in your resume-analyzer)
      let aiResponse;
      try {
        aiResponse = await window.puter.ai.feedback(filename, prompt);
        if (aiResponse && aiResponse.message) {
          aiResponse = typeof aiResponse.message.content === 'string' 
            ? aiResponse.message.content 
            : aiResponse.message.content[0].text;
        }
      } catch (feedbackError) {
        console.log('Feedback method failed, trying chat method...');
        // Fallback to chat method
        aiResponse = await window.puter.ai.chat(prompt, {
          model: 'claude-3-5-sonnet'
        });
      }
      
      console.log('Direct PDF summarization completed with Claude Sonnet');
      
      // Properly extract text from AI response object
      let summaryText = '';
      if (typeof aiResponse === 'string') {
        summaryText = aiResponse;
      } else if (aiResponse && aiResponse.message) {
        // Handle feedback API response format
        if (typeof aiResponse.message.content === 'string') {
          summaryText = aiResponse.message.content;
        } else if (Array.isArray(aiResponse.message.content)) {
          summaryText = aiResponse.message.content[0]?.text || '';
        }
      } else if (aiResponse && typeof aiResponse.text === 'string') {
        // Handle other possible response formats
        summaryText = aiResponse.text;
      } else if (aiResponse && typeof aiResponse.content === 'string') {
        summaryText = aiResponse.content;
      } else {
        // Last resort - try JSON.stringify for debugging
        console.warn('Unexpected AI response format:', aiResponse);
        summaryText = 'Unable to extract summary from AI response';
      }
      
      return {
        success: true,
        summary: summaryText,
        pageCount: 'Multiple', // We don't know exact count with direct reading
        wordCount: summaryText.split(' ').length
      };
      
    } catch (error) {
      console.error('Direct PDF summarization failed:', error);
      return {
        success: false,
        error: `Failed to summarize PDF: ${error.message}`
      };
    }
  }

  // Summarize pre-extracted text using Claude Sonnet
  async summarizeExtractedText(extractedText) {
    await this.initialize();
    
    try {
      console.log('Summarizing pre-extracted text with Claude Sonnet...');
      
      const prompt = `Please provide a comprehensive summary of this document. Focus on the key points, main topics, and important information. Here is the document content:

${extractedText}

Please structure your summary with:
1. Main Topic/Subject
2. Key Points (bullet format)
3. Important Details
4. Conclusion/Takeaways`;
      
      const aiResponse = await window.puter.ai.chat(prompt, {
        model: 'claude-3-5-sonnet'
      });
      
      // Properly extract text from AI response object
      let summaryText = '';
      if (typeof aiResponse === 'string') {
        summaryText = aiResponse;
      } else if (aiResponse && aiResponse.message) {
        // Handle feedback API response format
        if (typeof aiResponse.message.content === 'string') {
          summaryText = aiResponse.message.content;
        } else if (Array.isArray(aiResponse.message.content)) {
          summaryText = aiResponse.message.content[0]?.text || '';
        }
      } else if (aiResponse && typeof aiResponse.text === 'string') {
        // Handle other possible response formats
        summaryText = aiResponse.text;
      } else if (aiResponse && typeof aiResponse.content === 'string') {
        summaryText = aiResponse.content;
      } else {
        // Last resort - log for debugging
        console.warn('Unexpected AI response format:', aiResponse);
        summaryText = 'Unable to extract summary from AI response';
      }
      
      return {
        success: true,
        summary: summaryText,
        wordCount: extractedText.split(' ').length
      };
      
    } catch (error) {
      console.error('Text summarization failed:', error);
      return {
        success: false,
        error: `Failed to summarize text: ${error.message}`
      };
    }
  }

  // Read PDF file from Puter cloud storage
  async readPDFFromCloud(documentUrl) {
    await this.initialize();
    
    try {
      // Extract filename from URL or use the URL directly
      const filename = this.extractFilenameFromUrl(documentUrl);
      
      console.log('Reading PDF from Puter:', filename);
      
      // Read file from Puter storage
      const pdfData = await window.puter.fs.read(filename, { 
        returnAs: 'arrayBuffer' 
      });
      
      console.log('PDF data received, size:', pdfData.byteLength, 'bytes');
      
      // Convert to blob for display with proper MIME type
      const pdfBlob = new Blob([pdfData], { 
        type: 'application/pdf'
      });
      
      // Create object URL with fragment to force inline display
      const objectUrl = URL.createObjectURL(pdfBlob);
      const inlineUrl = `${objectUrl}#toolbar=0&navpanes=0&scrollbar=0`;
      
      return {
        blob: pdfBlob,
        url: inlineUrl,
        arrayBuffer: pdfData
      };
    } catch (error) {
      console.error('Error reading PDF from Puter cloud:', error);
      throw error;
    }
  }

  // Get PDF metadata (simplified since we're not using PDF.js)
  async getPDFMetadata(documentUrl) {
    try {
      // For now, return basic metadata since we're using direct AI reading
      return {
        numPages: 'Multiple',
        title: 'Course Document',
        author: 'Unknown',
        subject: '',
        creator: '',
        creationDate: null,
        modificationDate: null
      };
    } catch (error) {
      console.error('Error getting PDF metadata:', error);
      return null;
    }
  }

  // Upload PDF to Puter cloud with direct AI text extraction
  async uploadPDFToCloud(file) {
    await this.initialize();
    
    try {
      const timestamp = Date.now();
      const filename = `course-doc-${timestamp}-${file.name}`;
      
      console.log('Attempting to upload file:', filename);
      console.log('File size:', file.size, 'bytes');
      console.log('File type:', file.type);
      
      // Check if user is authenticated first
      const isAuth = await this.checkAuth();
      if (!isAuth) {
        console.log('User not authenticated, attempting sign-in...');
        const signedIn = await this.signIn();
        if (!signedIn) {
          throw new Error('Authentication failed');
        }
      }
      
      // Upload file to Puter storage first
      await window.puter.fs.write(filename, file);
      console.log('File uploaded to Puter successfully');
      
      // Extract text using direct AI reading
      const extractedText = await this.extractTextFromFile(file);
      
      console.log('Upload and text extraction completed:', filename);
      
      // Return the cloud URL/path
      return {
        url: filename,
        success: true,
        filename: file.name,
        size: file.size,
        extractedText: extractedText
      };
    } catch (error) {
      console.error('Detailed upload error:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      
      // Provide more specific error messages
      let errorMessage = error.message;
      if (error.message.includes('destination') || error.message.includes('Destination')) {
        errorMessage = 'File path issue. Please try again or contact support.';
      } else if (error.message.includes('auth') || error.message.includes('Auth')) {
        errorMessage = 'Authentication failed. Please sign in to Puter.';
      } else if (error.message.includes('size') || error.message.includes('Size')) {
        errorMessage = 'File too large. Please use a smaller PDF (max 10MB).';
      }
      
      return {
        url: null,
        success: false,
        error: errorMessage
      };
    }
  }

  // Helper function to extract filename from URL
  extractFilenameFromUrl(url) {
    if (url.includes('/')) {
      return url.split('/').pop();
    }
    return url;
  }

  // Check if user is authenticated with Puter
  async checkAuth() {
    await this.initialize();
    
    try {
      // Check if user is signed in
      const user = await window.puter.auth.getUser();
      return !!user;
    } catch (error) {
      return false;
    }
  }

  // Sign in to Puter (if needed)
  async signIn() {
    await this.initialize();
    
    try {
      await window.puter.auth.signIn();
      return true;
    } catch (error) {
      console.error('Failed to sign in to Puter:', error);
      return false;
    }
  }

  // Get current user info
  async getUserInfo() {
    await this.initialize();
    
    try {
      const user = await window.puter.auth.getUser();
      return user;
    } catch (error) {
      return null;
    }
  }
}

// Export singleton instance
export default new PuterService();
