import "dotenv/config";
import { throws } from "assert";
import fastify from "fastify";
import jwt from "@fastify/jwt";
import { prisma } from "./lib/prisma";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";

const app = fastify();

app.register(cors, {
  origin: true,
});
app.register(jwt, {
  secret: "spacecapsule512sad2MARCELO",
});
app.register(authRoutes);
app.register(memoriesRoutes);
app
  .listen({ port: 3333, host: "0.0.0.0" })
  .then(() => {
    console.log("online on http://localhost:3333");
  })
  .catch((err) => {
    console.log("error123");
    throws(err);
  });
