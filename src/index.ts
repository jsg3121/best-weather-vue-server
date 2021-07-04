import { runServer } from "./server";
import cors from "cors";
import express from "express";
export const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

runServer();
