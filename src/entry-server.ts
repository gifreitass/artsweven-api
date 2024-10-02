import { Request, Response } from "express"
import express from 'express'
import create from "./controllers/category/create";

const app = express()
app.use(express.json());
const port = 3001

app.get('/', (req: Request, res: Response) => {
    res.send('App rodando')
})

app.post('/category', create)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})