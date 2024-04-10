import { InterParams } from "@/app/(Back)/Schemas/params"
import prisma from "@/libs/prisma"


class PaisDetalle {
    //metodo put
    putPais = async(req:Request, {params}:InterParams)=>{
        const {id} = params
        const {contiId, habiPais, nombrePais} = await req.json()
        const putpais = await prisma.pais.update({
            where:{
                id
            },
            data:{
                contiId, 
                habiPais,
                nombrePais
            }
        })
        return putpais
    }

    // metodo delete
    deletePais = async(req:Request, {params}:InterParams)=>{
        const {id} = params
        const deletepais = await prisma.pais.delete({
            where:{
                id
            }
        })
        return deletepais
    }

    // metodo getone
    getOnePais = async(req:Request, {params}:InterParams)=>{
        const {id} = params
        const getonepais = prisma.pais.findUnique({
            where:{
                id
            }
        })
        return getonepais
    }
}

export const paisdetalle1 = new PaisDetalle()