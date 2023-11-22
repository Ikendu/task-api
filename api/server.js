const dotenv = require('dotenv').config()

const express = require(`express`)
const mongoose = require(`mongoose`)
const cors = require(`cors`)

const connectDB = require('./config/mongoDB')
const Task = require('./config/Models')
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require('./controllers/taskControll')

const app = express()
app.use(cors())

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Shorter line of code
// app.route(`/api/task`).post(createTask).get(getTasks)
// app.route(`/api/task/:id`).get(getTask).delete(deleteTask).put(updateTask)

app.get(`/`, (req, res) => res.send(`Welcome to Home Page`))
app.post(`/api/task`, createTask)
app.get(`/api/task`, getTasks)
app.get(`/api/task/:id`, getTask)
app.delete(`/api/task/:id`, deleteTask)
app.put(`/api/task/:id`, updateTask)

const PORT = process.env.PORT || 5000
// MONGO_URI = `mongodb+srv://task:11111234Aa@cluster0.xvwyqdc.mongodb.net/?retryWrites=true&w=majority`

// mongoose
//   .connect(MONGO_URI)
//   .then(() => {
//     console.log(`mongodb connected successfully`)
//     app.listen(PORT, () => console.log(`listening on port ${PORT}`))
//   })
//   .catch((error) => console.log(error))

const connectServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
connectServer()
