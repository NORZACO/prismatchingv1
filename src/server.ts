import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 4000;

const prisma = new PrismaClient();

app.use(express.json());

app.get('/', async (_req, res) => {
  res.json(await prisma.auth_group.findMany());
});

// app.post('/todos', async (req, res) => {
//   const { text } = req.body;
//   const todo = await prisma.todo.create({
//     data: {
//       text,
//     },
//   });
//   res.json(todo);
// });



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});