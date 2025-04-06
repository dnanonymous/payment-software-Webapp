import dotenv from "dotenv"
dotenv.config();
import express, { urlencoded } from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.get('/', (req,res) => {
    res.send("Payment Software Web3 App");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT", PORT);
});