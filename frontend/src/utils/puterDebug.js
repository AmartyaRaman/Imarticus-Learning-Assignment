// Simple Puter test utility to debug upload issues
export const testPuterUpload = async (file) => {
  console.log('=== PUTER UPLOAD DEBUG TEST ===');
  
  try {
    // Test 1: Check if Puter is available
    console.log('1. Checking Puter availability...');
    if (typeof window.puter === 'undefined') {
      throw new Error('Puter.js is not loaded');
    }
    console.log('✅ Puter is available');

    // Test 2: Check authentication
    console.log('2. Checking authentication...');
    try {
      const user = await window.puter.auth.getUser();
      console.log('✅ User authenticated:', user?.username || 'Unknown');
    } catch (authError) {
      console.log('❌ Not authenticated, attempting sign-in...');
      await window.puter.auth.signIn();
      console.log('✅ Sign-in completed');
    }

    // Test 3: Try simple filename first
    console.log('3. Testing simple filename upload...');
    const simpleFilename = `test-${Date.now()}.pdf`;
    
    try {
      await window.puter.fs.write(simpleFilename, file);
      console.log('✅ Simple filename upload successful:', simpleFilename);
      return { success: true, filename: simpleFilename, method: 'simple' };
    } catch (simpleError) {
      console.log('❌ Simple filename failed:', simpleError.message);
    }

    // Test 4: Try with different file format
    console.log('4. Testing with ArrayBuffer...');
    const arrayBuffer = await file.arrayBuffer();
    const bufferFilename = `buffer-${Date.now()}.pdf`;
    
    try {
      await window.puter.fs.write(bufferFilename, arrayBuffer);
      console.log('✅ ArrayBuffer upload successful:', bufferFilename);
      return { success: true, filename: bufferFilename, method: 'arraybuffer' };
    } catch (bufferError) {
      console.log('❌ ArrayBuffer upload failed:', bufferError.message);
    }

    // Test 5: Try creating directory first
    console.log('5. Testing with directory creation...');
    try {
      await window.puter.fs.mkdir('course-docs');
      console.log('✅ Directory created');
    } catch (dirError) {
      console.log('⚠️ Directory creation failed (might already exist):', dirError.message);
    }

    const dirFilename = `course-docs/doc-${Date.now()}.pdf`;
    try {
      await window.puter.fs.write(dirFilename, file);
      console.log('✅ Directory upload successful:', dirFilename);
      return { success: true, filename: dirFilename, method: 'directory' };
    } catch (dirUploadError) {
      console.log('❌ Directory upload failed:', dirUploadError.message);
    }

    throw new Error('All upload methods failed');

  } catch (error) {
    console.error('=== UPLOAD TEST FAILED ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    return { success: false, error: error.message };
  }
};

// Quick test function you can call from browser console
window.testPuterUpload = testPuterUpload;
