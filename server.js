import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Cors from "cors";

import Posts from "./appData.js";

// App Config
dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
const connection_url = process.env.MONGODB;

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("jelow word"));

app.post("/tiktok/posts", (req, res) => {
  const dbPosts = req.body;

  Posts.create(dbPosts, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tiktok/posts", (req, res) => {
  Posts.find((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
