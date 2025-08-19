import express, { Request, Response } from 'express';
import userRoutes from "./routes/userRoutes";
import cors from 'cors';

const app = express();

 app.use(cors());

app.use(express.json());

app.use("/usuarios", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("API rodando");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}`);
});
