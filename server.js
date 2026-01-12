import express from "express";
import { router } from "./routes/index.js";

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
