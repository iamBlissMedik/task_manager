import express from "express";
import tasksRouter from "./routes/tasks.js";
import { connectDB } from "./db/connect.js";
import "dotenv/config";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
const app = express();
// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);
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
