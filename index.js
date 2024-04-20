import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import ConstructRoutes from "./routes/ConstructRoutes.js";
import cors from "cors";
import "dotenv/config";

const PORT = 3000;
const app = express();

mongoose.connect(process.env.DB_URL, { useNewURLParser: true });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(ConstructRoutes);

app.listen(PORT, () => {
  console.log("server on");
});
