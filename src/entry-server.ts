import { Request, Response } from "express"
import express from 'express'
import { CategoryControllers } from "./controllers/category";

const app = express()
app.use(express.json());
const port = 3001

app.get('/', (req: Request, res: Response) => {
    res.send('App rodando')
})

app.post('/category', CategoryControllers.create)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})