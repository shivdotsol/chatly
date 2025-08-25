import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/room", (req, res) => {
    res.json({
        message: "Hello",
    });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`))