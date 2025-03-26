import 'dotenv/config'
import router from "./routes/index.js";
import express from "express";

const app = express();
router(app);

app.listen(process.env.PORTA, console.log('dsjoaodnasdas'));
