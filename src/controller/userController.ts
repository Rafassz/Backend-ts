import type { Request, Response } from "express";
import prisma from "../database/prismaClient";


export const criarUser = async (req: Request, res: Response) =>{
    try {
        const {nome, email, senha} = req.body;
        const usuario = await prisma.usuario.create({
            data: {nome, email, senha}
        });
        res.status(201).json("Usuário" + (usuario) + "Criado com sucesso")
    } catch (error) {
        res.status(500).json("Erro ao criar usuário")
    }    
}

export const listarUsers = async (req: Request, res: Response) => {
    const usuario = await prisma.usuario.findMany();
    res.json(usuario);
}

export const buscarUser =  async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;
        const usuario = await prisma.usuario.findUnique({
            where: {id: Number(id)}
    })
        res.json(usuario)
    } catch (error) {
        res.status(404).json("usuario não encontrado")
    }
}

export const atualizarUser = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {nome, email, senha} = req.body;

        const usuario = await prisma.usuario.update({
            where: {id: Number (id)},
            data: {nome, email, senha}
    })
        res.status(201).json ("Usuário" + (usuario) + "Atualizado com sucesso")
    } catch (error) {
        res.status(500).json("Erro ao atualizar usuário")
    }
}

export const deletarUser = async (req: Request, res: Response) =>{
    const {id} = req.params;
    
    const usuario = await prisma.usuario.delete({where: {id: Number(id)}})

    res.status(204).json("Usuário deletado")
}