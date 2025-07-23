import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();
const prisma = new PrismaClient();

// Admin Signup
router.post('/register', async (req, res) => {
  const { firstName, lastName, username, password } = req.body;
  const exists = await prisma.admin.findUnique({ where: { username } });
  if (exists) return res.status(400).json({ message: 'Admin already exists' });

  const hashed = await bcrypt.hash(password, 10);

  const admin = await prisma.admin.create({
    data: {
      firstName,
      lastName,
      username,
      password: hashed,
    },
  });

  res.status(201).json({ id: admin.id, username: admin.username });
});

// Admin Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await prisma.admin.findUnique({ where: { username } });

  if (!admin || !await bcrypt.compare(password, admin.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  res.json({ token });
});

export default router;
