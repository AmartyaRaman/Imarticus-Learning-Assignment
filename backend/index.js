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

app.use('/api/courses', router)

connectToDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

