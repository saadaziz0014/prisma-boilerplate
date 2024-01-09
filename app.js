import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Listen on ${port}`);
});
