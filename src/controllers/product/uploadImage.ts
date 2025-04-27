import { Request, Response } from "express"
import { ResponsePayload } from "../../types/express.types"
import { Product } from "@prisma/client"

interface UploadImageParams {
    productId: string;
}

const uploadImage = async (req: Request, res: Response<ResponsePayload<Product>>) => {
    //tipagem dos params dando erro com o multer
    const body = req.body as UploadImageParams
    //verificar se o produto tem alguma imagem, se sim pegar a imagem e deletar
    //atualizar product.image para a imagem nova
    try {
        
    } catch (error) {

    }
    console.log(req.file)
}

export default uploadImage