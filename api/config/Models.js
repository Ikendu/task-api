const mongoose = require('mongoose')

const ModelShema = mongoose.Schema(
  {
    name: { type: String, required: [true, `Add a name`] },
    completed: { type: Boolean, default: false, required: true },
  },
  { timestamps: true }
)

const Task = mongoose.model(`Task`, ModelShema)

module.exports = Task
