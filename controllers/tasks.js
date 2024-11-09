const getAllTasks = (req, res) => {
  res.send("all items from the file");
};
const createTask = (req, res) => {
  res.send("create task");
};
const getTask = (req, res) => {
  res.send("get a task");
};
const updateTask = (req, res) => {
  res.send("updatetask");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};
export { getAllTasks,createTask,deleteTask,getTask,updateTask };
