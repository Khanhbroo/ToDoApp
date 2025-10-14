import express from "express";
import tasksRouters from "./routes/tasksRouters.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import path from "path";

// Get environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware to parse req.body
app.use(express.json());

// Middleware for CORS
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: "http://localhost:5173" }));
}

// Middleware to get all routes for tasks
app.use("/api/tasks", tasksRouters);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// Connect to MongoDB Database
await connectDB();

// Listening on port to run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
