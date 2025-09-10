import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
