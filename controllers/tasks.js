import Task from "../models/Task.js";
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    res.status(201).json({ task });
    if (!task) {
      return res.status(404).json({ msg: `no task with id : ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = (req, res) => {
  res.send("updatetask");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
export { getAllTasks, createTask, deleteTask, getTask, updateTask };
