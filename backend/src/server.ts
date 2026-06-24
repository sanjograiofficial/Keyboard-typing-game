import express from "express";
import { log } from "node:console";
import "dotenv/config";

let port = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  log(`server started at: http://localhost:${port}`);
});
