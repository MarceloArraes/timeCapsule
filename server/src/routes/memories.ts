import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany({
      select: {
        name: true,
      },
    });
    return users;
  });
  app.get("/memories/:id", async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);
    const memory = prisma.memory.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return memory;
  });
  app.put("/memories/:id", async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });
    const { id } = paramsSchema.parse(req.params);
    const { content, isPublic, coverUrl } = bodySchema.parse(req.params);
    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: { content, isPublic, coverUrl },
    });
    return memory;
  });

  app.delete("/memories/:id", async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);
    await prisma.memory.delete({
      where: {
        id,
      },
    });
  });

  app.get("/memories", async (req, res) => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat("..."),
      };
    });
  });
  app.post("/memories", async (req, res) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, isPublic, coverUrl } = bodySchema.parse(req.params);
    const memory = await prisma.memory.create({
      data: {
        content,
        isPublic,
        coverUrl,
        userId: "3a518346-791d-4b2e-b05a-5aeb2f5fc0d7",
      },
    });
    return memory;
  });
}
