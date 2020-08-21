import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();
const port = 3000;

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});