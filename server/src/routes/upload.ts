import { FastifyInstance } from "fastify";
import { util, z } from "zod";
import axios from "axios";
import { extname, resolve } from "node:path";
import { prisma } from "../lib/prisma";
import { randomUUID } from "crypto";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline);

export async function uploadRoutes(app: FastifyInstance) {
  app.post("/upload", async (req, res) => {
    const upload = await req.file({
      limits: {
        fileSize: 5_242_880, // 5mb
      },
    });

    if (!upload) return res.status(400).send("No upload file");

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/;
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype);

    if (!isValidFileFormat) {
      return res.status(400).send("Invalid File Format");
    }
    console.log("upload.filename123 ", upload.filename);

    const fileId = randomUUID();
    const extension = extname(upload.filename);

    const fileName = fileId.concat(extension);

    const writeStream = createWriteStream(
      resolve(__dirname, "../../uploads", fileName)
    );

    await pump(upload.file, writeStream);

    const fullUrl = req.protocol.concat("://").concat(req.hostname);
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString();
    console.log("fileurl164 ", fileUrl, fullUrl);
    res.status(200).send("SUCESS MEN");
  });
}
