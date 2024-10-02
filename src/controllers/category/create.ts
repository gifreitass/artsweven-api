import { Request, Response } from "express";
import { prisma } from "../../database/database-client";

const create = async (req: Request, res: Response) => {
    const { name } = req.body

    const result = await prisma.category.create({
        data: {
            name
        }
    })

    res.json(result)
}

export default create