import express from "express";
import tasksRouter from "./routes/tasks.js";
import { connectDB } from "./db/connect.js";
import "dotenv/config";
const app = express();
// middleware
app.use(express.static("./public"))
app.use(express.json());
// routes

app.use("/api/v1/tasks", tasksRouter);
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
