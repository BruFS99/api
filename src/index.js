/*const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000
app.use(express.json())

mongoose.connect('mongodb+srv://bugereats:Ad8E10wLj7LsqmI1@cluster0.2xjikco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const Post = mongoose.model('Post', { 
    title: String,
    description: String
});

app.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

   await post.save()
   res.send(post)
})

app.get('/', async (req, res) => {
    const posts = await Post.find()
  res.send(posts)
})

app.listen(port, () => {
  console.log(`App runing ${port}`)
})*/