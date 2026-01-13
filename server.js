import express from "express";
import { router } from "./routes/index.js";
import { logMiddleware } from "./middlewares/log.middleware.js";

const app = express();
app.use(express.json());
app.use(logMiddleware());

const { PORT } = process.env;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
