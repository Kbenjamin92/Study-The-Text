import express from 'express';
import multer from 'multer';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { authenticate } from '../middleware/authMiddleware';

const prisma = new PrismaClient();
const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

router.get('/', async (_, res) => {
  const studies = await prisma.study.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(studies);
});

router.post('/', authenticate, upload.single('file'), async (req, res) => {
  const { title, summary, categories } = req.body;
  const fileUrl = `/uploads/${req.file?.filename}`;

  const study = await prisma.study.create({
    data: { title, summary, categories, fileUrl },
  });

  res.status(201).json(study);
});

export default router;
