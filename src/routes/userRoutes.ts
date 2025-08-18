import { Router } from "express";
import {
  criarUser,
  listarUsers,
  buscarUser,
  atualizarUser,
  deletarUser
} from "../controller/userController";

const router = Router();

router.post("/", criarUser);
router.get("/", listarUsers);
router.get("/:id", buscarUser);
router.put("/:id", atualizarUser);
router.delete("/:id", deletarUser);

export default router;
