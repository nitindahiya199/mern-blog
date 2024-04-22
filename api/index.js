import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.router.js'
import authRoutes from './routes/auth.router.js'

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`connected to database`))
  .catch((err) => console.log(`Error : ${err}`))

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use('/api/user', userRoutes)

app.use('/api/auth', authRoutes)