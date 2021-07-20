import { runServer } from "./server";
import cors from "cors";
import express from "express";
import path from "path";

export const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

runServer();
