import { PrismaClient } from "../generated/prisma/client.ts";
import "dotenv/config";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL
}); // ← parênteses OBRIGATÓRIOS

export function none(req, res) {
  res.send("oi");
}

export async function create(req, res) {}
export async function findAll(req, res) {}
export async function findOne(req, res) {}
export async function update(req, res) {}
export async function remove(req, res) {}