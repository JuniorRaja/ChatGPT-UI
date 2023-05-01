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

const Config = new Configuration({
  organization: "org-bOagEdfYA6gwQGOXoEYX3rBV",
  apiKey: process.env.API_KEY,
});

const openAI = new OpenAIApi(Config);

app.listen("3080", () => console.log("Listening on port 3080"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openAI.createCompletion({
      model: "text-devinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });

    res.json({ message: response.data.choices[0].value }).status(200);
  } catch (e) {
    console.log(e);
    res.send(e).status(400);
  }
});
