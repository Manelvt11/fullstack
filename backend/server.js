import express from "express"
import 'dotenv/config'
import { router } from "./routes/tarefaRoute.js"
import cors from 'cors'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/api/tarefa', router)

app.listen(port, "0.0.0.0", () => {
    console.log("servidor rodando na porta", port)
})