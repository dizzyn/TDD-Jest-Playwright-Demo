import page from "./routes/page";
import api from "./routes/api";

export const PORT = 3000;

const express = require("express");
const app = express();

app.get("/", page);
app.get("/api", api);

console.log(`Listening at http://localhost:${PORT} - press [CMD + C] to exit`);
app.listen(PORT);
