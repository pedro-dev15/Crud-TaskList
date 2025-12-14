import { Router } from "express";
import * as Task from "./controller.ts"

const router = Router()

//Rota padrão
router.get("/", Task.none)

//Criação de uma task
router.post("/tasks", Task.create)

//Pegar todas as tasks
router.get("/tasks", Task.findAll)

//Pegar só uma task
router.get("/tasks/:id", Task.findOne)

//Alteração de uma task
router.put("/tasks/:id", Task.update)

//Deletando uma task
router.delete("/tasks/:id", Task.remove)

export default router;