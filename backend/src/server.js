import express from "express";
import tasksRouters from "./routes/tasksRouters.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Get environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse req.body
app.use(express.json());

// Middleware to get all routes for tasks
app.use("/api/tasks", tasksRouters);

// Connect to MongoDB Database
await connectDB();

// Listening on port to run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
