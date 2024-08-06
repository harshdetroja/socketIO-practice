import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const app = express();
const server = createServer(app);

const _dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", async (req, res) => {
  res.sendFile(join(_dirname, "index.html"));
});

const main = async () => {
  server.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
};

main();
