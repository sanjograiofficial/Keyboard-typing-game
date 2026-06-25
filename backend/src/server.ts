import express from "express";
import { log } from "node:console";
import "dotenv/config";
import { errorHandler } from "./middlewares/errorHandler.js";
import routes from "./routes/routes.js";
import cors from "cors";

let port = process.env.PORT;
let frontendPort = process.env.FRONTENDPORT;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `https:localhost:${frontendPort}`,
  }),
);

app.use("/", routes);

app.use(errorHandler);

app.listen(port, () => {
  log(`server started at: http://localhost:${port}`);
});
