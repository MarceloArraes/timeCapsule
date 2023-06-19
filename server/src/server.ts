import { throws } from "assert";
import fastify from "fastify";
import { prisma } from "./lib/prisma";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(memoriesRoutes);
app.register(cors, {
  origin: true,
});
app
  .listen({ port: 3333 })
  .then(() => {
    console.log("online on http://localhost:3333");
  })
  .catch((err) => {
    console.log("error123");
    throws(err);
  });
