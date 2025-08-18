import express, { Request, Response } from 'express';
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.use("/usuarios", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("API rodando");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}`);
});
