import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studyRoutes from './/routes/studyRoutes';
import authRoutes from './/routes/authRoutes';
import path from 'path';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/studies', studyRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
