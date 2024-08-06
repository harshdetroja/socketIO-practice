import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const _dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", async (req, res) => {
  res.sendFile(join(_dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected!");
  socket.on("chat message", (msg) => {
    console.log("msg-- :", msg);
  });
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
  });
});

const main = async () => {
  server.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
};

main();
