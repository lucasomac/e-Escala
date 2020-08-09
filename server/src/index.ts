import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes";

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT;
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
