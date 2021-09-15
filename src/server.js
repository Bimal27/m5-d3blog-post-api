import express from 'express';
import listEndpoints from "express-list-endpoints"
import cors from "cors"

import postsRouter from "./blogpost/index.js"

const server = express()

const port = 3001

server.use(cors()) 
server.use(express.json()) 

// ***************** ENDPOINTS *********************
server.use("/posts", postsRouter)


console.table(listEndpoints(server))

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
