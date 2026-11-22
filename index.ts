import express from "express";
import Hello from "./Hello";
const app = express();
Hello(app);
app.listen(process.env.PORT || 4000);
