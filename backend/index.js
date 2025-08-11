import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/course.route.js';
import connectToDB from './dbConnection.js';

// Configure dotenv to look for .env file in backend directory
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(cors())
app.use(express.json())

app.use('/api/courses', router)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

connectToDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
