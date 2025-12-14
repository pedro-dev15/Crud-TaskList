import { prisma } from './lib/prisma'
import "dotenv/config";
import { Request, Response } from 'express';

export function none(req: Request, res: Response) {
  res.send("oi");
}

export async function create(req: Request, res: Response) {
    const { title } = req.body;

    const task = await prisma.task.create({
        data: {
            title
        }
    })

    return res.json(task);
}

export async function findAll(req: Request, res: Response) {
    const tasks = await prisma.task.findMany()

    return res.json(tasks);
}

export async function findOne(req: Request, res: Response) {
    const { id } = req.params;

    const tasks = await prisma.task.findUnique({
        where: {
            id: Number(id)
        }
    })

    return res.json(tasks);

}

export async function update(req: Request, res: Response) {
    const {id} = req.params;
    const { title } = req.body;
     const { done } = req.body;

     const data: any = { title }

     if (done !== undefined) {
        data.done = done;
     }

    const tasks = await prisma.task.update({
        where: {
            id: Number(id)
        },
        data
    })

    return res.json(tasks);
}

export async function remove(req: Request, res: Response) {
    const {id} = req.params;

    const tasks = await prisma.task.delete({
        where: {
            id: Number(id)
        }
    })

    return res.json(tasks)
}