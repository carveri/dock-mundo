import { InterParams } from "@/app/(Back)/Schemas/params"
import prisma from "@/libs/prisma"



class CiudadDetalle {

    //metodo put
    putOneCiudad =async(req:Request, {params}:InterParams)=>{
        const {id} = params
        const {nombreCiudad, habiCiudad, paisId} = await req.json()
        const putoneciudad = await prisma.ciudad.update({
            where:{
                id
            },
            data:{
                nombreCiudad,
                habiCiudad,
                paisId
            }
        })
        return putoneciudad
    }

    // metodo delete
    deleteOneCiudad =async(req:Request, {params}:InterParams)=>{
        const {id} = params
        const deleteciudad = await prisma.ciudad.delete({
            where:{
                id
            }
        })
        return deleteciudad
    }

    // metodo getone
    getOneCiudad = async(req:Request, {params}:InterParams)=>{
        const {id} = params
        const getoneciudad = await prisma.ciudad.findUnique({
            where:{
                id
            }
        })
        return getoneciudad
    }
}

export const ciudaddetalle = new CiudadDetalle()