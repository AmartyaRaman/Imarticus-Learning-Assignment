import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/course.route.js';
import connectToDB from './dbConnection.js';

dotenv.config({ path: './backend/.env' });
const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json())

// api to get all courses
app.use('/api/courses', router)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

// For Vercel serverless deployment
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
    connectToDB().then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    });
}