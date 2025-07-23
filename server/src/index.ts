import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studyRoutes from './routes/studyRoutes';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import path from 'path';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow Vite dev server
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true       
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/studies', studyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
