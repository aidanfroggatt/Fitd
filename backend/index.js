import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
