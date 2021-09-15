import express from "express" 
import fs from "fs" 
import { fileURLToPath } from "url" 
import { dirname, join } from "path" 
import uniqid from "uniqid" 

const postsRouter = express.Router()

const currentFilePath = fileURLToPath(import.meta.url)

const currentDirPath = dirname(currentFilePath)

const postsJSONFilePath = join(currentDirPath, "posts.json")

// 1. get all the post
postsRouter.get('/' ,(req ,resp) =>{
    try {
        const file =fs.readFileSync(postsJSONFilePath)
        const posts = JSON.parse(file)
        resp.send(posts)
        
    } catch (error) {
        resp.send(500).send({message: error.message}); 
    }
})

// 2. create  the post
postsRouter.post('/' ,(req ,resp) =>{
    try {
        // const {category, title} = req.body
        const newPost = { ...req.body, 
            postId: uniqid(), 
            cover:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F1*mk1-6aYaf_Bes1E3Imhc0A.jpeg&imgrefurl=https%3A%2F%2Ftowardsdatascience.com%2F3-numpy-image-transformations-on-baby-yoda-c27c1409b411&tbnid=gOUAFhrbQ2nYQM&vet=12ahUKEwi2sZX3ioHzAhUJFBoKHYKbBdEQMygAegUIARDLAQ..i&docid=OXvyXJop1qSGqM&w=1200&h=900&q=image&ved=2ahUKEwi2sZX3ioHzAhUJFBoKHYKbBdEQMygAegUIARDLAQ", 
            // readTime:{ value,
            //     unit
            // },
            // author:{ surname,
            //   avatar:`https://ui-avatars.com/api/?name=${surname}`
            // },
            //   content:"HTML" ,
            //   createdAt: new Date() 
            }
              console.log(newPost)
        const posts = JSON.parse(fs.readFileSync(postsJSONFilePath))
        posts.push(newPost)
        fs.writeFileSync(postsJSONFilePath, JSON.stringify(posts))
        resp.status(201).send(newPost)
        
    } catch (error) {
        resp.send({message: error.message});
        
    }
})

// 3. get single the post
postsRouter.get('/:postId' ,(req ,resp) =>{
    try {
        
    } catch (error) {
        resp.send(500).send({message: error.message});
        
    }
})


// 1. delete the post
postsRouter.delete('/:postId' ,(req ,resp) =>{
    try {
        
    } catch (error) {
        resp.send(500).send({message: error.message});
        
    }
})

// 1. update the post
postsRouter.put('/:postId' ,(req ,resp) =>{
    try {
        
    } catch (error) {
        resp.send(500).send({message: error.message});
        
    }
})



export default postsRouter