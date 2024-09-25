import { Request, Response } from "express"

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req: Request, res: Response) => {
    res.send('App rodando')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})