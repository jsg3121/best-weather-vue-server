import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8989;

app.get("/aa", (_, res) => {
  res.send("ASDFASDFS");
  res.end();
});

app.listen(PORT, () => {
  console.log("server start!!");
});
