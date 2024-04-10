import prisma from "@/libs/prisma"

class Pais {

    // metodo post
    postPais = async(req:Request)=>{
        const {contiId, habiPais, nombrePais} = await req.json()
        const postpais = await prisma.pais.create({
            data:{
                contiId,
                habiPais,
                nombrePais
            }
        })
        return postpais
    }
    
    // metodo get 
    getPais = async(req:Request)=>{
        const getpais = await prisma.pais.findMany()
        return getpais
    }
}

export const pais1 = new Pais()