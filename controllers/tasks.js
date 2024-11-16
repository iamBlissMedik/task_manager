import Task from "../models/Task.js";
const getAllTasks = (req, res) => {
  res.send("all tasks");
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("updatetask");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
export { getAllTasks, createTask, deleteTask, getTask, updateTask };
