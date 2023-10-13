require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import AppRouter from "./routes";

const PORT = process.env.PORT || 8000;
const app = express();

const v1 = "/api/v1";

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(v1, AppRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} `);
});
