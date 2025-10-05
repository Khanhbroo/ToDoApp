import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.log("Failed to get all tasks", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const taskDuplicated = await Task.findOne({ title });
    if (taskDuplicated)
      return res
        .status(500)
        .json({ message: "Can not create a duplicated task" });

    const task = new Task({ title });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.log("Failed to create a new task", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, status, completedAt } = req.body;
    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
        completedAt,
      },
      { new: true }
    );

    if (!updateTask) {
      return res.status(404).json({ message: "This task does not exist" });
    }

    res.status(200).json({ message: "Successfully updated this task" });
  } catch (error) {
    console.log("Failed to update this task", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);

    if (!deleteTask) {
      return res.status(404).json({ message: "This task does not exist" });
    }

    res.status(200).json({ message: "Successfully deleted this task" });
  } catch (error) {
    console.log("Failed to delete this task", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
