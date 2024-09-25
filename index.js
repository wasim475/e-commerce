require('dotenv').config()
const express = require('express')
const app = express()
const dbConnection = require("./Config/dbConnection")
const Task = require("./Model/TaskScema")
const port = process.env.PORT || 1971

// MiddleWare
app.use(express.json())



  dbConnection()

  app.get("/tasks", async (req,res)=>{
    const data = await Task.find()
    res.send(data) 
  })

  app.put("/task", async (req, res)=>{
    const {id, title}= req.body;
    console.log(id)
    await Task.findByIdAndUpdate({_id: id}, {title: title})
  })

  app.delete("/task", async(req, res)=>{
    const {id} = req.body;
    await Task.findByIdAndDelete({_id: id});
  })

  app.post("/tasks", (req, res)=>{
    const {title, priority}= req.body;
    const task = new Task({title, priority})
    task.save()

    res.send({"success": "Task Created"})

    console.log(title, priority)
    // res.send("Get Tasks")
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})  

app.listen(port, () => {
  console.log(`Ecommerce Server in running on ${port}`)
})