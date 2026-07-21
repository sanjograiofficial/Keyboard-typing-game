import express from "express";
import { log } from "node:console";
import "dotenv/config";
import { errorHandler } from "./middlewares/errorHandler.js";
import routes from "./routes/routes.js";
import cors from "cors";

let port = process.env.PORT;
let frontendURL = process.env.FRONTEND_URL;
const app = express();
app.use(express.json());
app.use(
  cors({
    // origin: `http://localhost:${frontendURL}`,
    origin: `https://typing-game-qver.vercel.app`,
  }),
);

app.use("/", routes);

app.use(errorHandler);

app.listen(port, () => {
  log(`server started at: http://localhost:${port}`);
});
