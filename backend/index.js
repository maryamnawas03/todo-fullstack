const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Get last 5 tasks
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { completed: false },
    orderBy: { createdAt: 'desc' },
    take: 5
  });
  res.json(tasks);
});

// Create task
app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  const task = await prisma.task.create({ data: { title, description } });
  res.json(task);
});

// Mark task as complete
app.put('/tasks/:id/complete', async (req, res) => {
  const id = Number(req.params.id);
  await prisma.task.update({ where: { id }, data: { completed: true } });
  res.sendStatus(200);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
