import prisma from "@/libs/prisma"


class Ciudad {
    // metodo post
    postCiudad =async(req:Request)=>{
        const {nombreCiudad, habiCiudad, paisId} = await req.json()
        const postciudad = await prisma.ciudad.create({
            data:{
                nombreCiudad,
                habiCiudad, 
                paisId
            }
        })
        return postciudad
    }

    // metodo get 
    getCiudad = async(req:Request)=>{
        const getciudad = await prisma.ciudad.findMany()
        return getciudad
    }
}

export const ciudad1 = new Ciudad()