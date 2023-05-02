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
  organization: "org-AeUqQWD6u2zlF4dvoNrNDP8I",
  apiKey: process.env.API_KEY,
});

const openAI = new OpenAIApi(Config);

app.listen("3080", () => console.log("Listening on port 3080"));

app.get("/", (req, res) => {
  res.send("Basic Message");
});

app.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openAI.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });

    res.json({ message: response.data.choices[0].text });
  } catch (e) {
    console.log(e.message);
    res.send(e).status(400);
  }
});
