import prisma from "@/libs/prisma"


class Pais {


    // metodo post
    postPais = async(req:Request)=>{
        const {id, nombre, habitantes} = await req.json()
        const savePais = await prisma.pais.create({
            data:{
                id,
                nombre,
                habitantes
            }
        })
        return savePais
    }


    // metodo get
    getPais = async(req:Request)=>{
        const getAllPais = await prisma.pais.findMany()
        return getAllPais
    }
}

export const pais1 = new Pais()
