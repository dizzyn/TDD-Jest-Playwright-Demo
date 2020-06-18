// @ts-ignore
import express from "express";
import page from "./routes/page";
import api from "./routes/api";

const app = express();

app.get("/", page);
app.get("/api", api);

console.log("Listening at http://localhost:3000 - press [CMD + C] to exit");
app.listen(3000);
