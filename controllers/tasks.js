const getAllTasks = (req, res) => {
  res.send("all tasks");
};
const createTask = (req, res) => {
  res.json(req.body);
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
