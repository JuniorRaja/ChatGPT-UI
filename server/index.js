// use "type": "module" in package.json to use import instead of Require

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const app = express();

env.config();
app.use(cors());
app.use(bodyParser.json());
app.listen("3080", () => console.log("Listening on port 3080"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
