import { prisma } from './lib/prisma';
import "dotenv/config";
import { Request, Response } from 'express';

// Default route
export function none(req: Request, res: Response) {
  res.send("Hello");
}

// Create a task
export async function create(req: Request, res: Response) {
    const { title } = req.body;

    const task = await prisma.task.create({
        data: { title }
    });

    return res.json(task);
}

// Get all tasks
export async function findAll(req: Request, res: Response) {
    const tasks = await prisma.task.findMany();
    return res.json(tasks);
}

// Get a single task by ID
export async function findOne(req: Request, res: Response) {
    const { id } = req.params;

    const task = await prisma.task.findUnique({
        where: { id: Number(id) }
    });

    return res.json(task);
}

// Update a task
export async function update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, done } = req.body;

    const data: any = { title };

    if (done !== undefined) {
        data.done = done;
    }

    const task = await prisma.task.update({
        where: { id: Number(id) },
        data
    });

    return res.json(task);
}

// Delete a task
export async function remove(req: Request, res: Response) {
    const { id } = req.params;

    const task = await prisma.task.delete({
        where: { id: Number(id) }
    });

    return res.json(task);
}