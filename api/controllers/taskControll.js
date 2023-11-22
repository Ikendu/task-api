const Task = require('../config/Models')

//create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    res.json(error)
  }
}

//get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 })
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

//get a single task
const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) return res.status(404).json(`Task with id: ${id} not found`)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

//Update a Task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) return res.status(404).json(`Task with id: ${id} not found`)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

//Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndDelete(id)
    if (!task) return res.status(404).json(`Task with id: ${id} not found`)
    res.status(200).send(`Task Deleted`)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { createTask, getTasks, getTask, deleteTask, updateTask }
