import prisma from "@/libs/prisma"


class ContiDetalle {

    //metodo put
    putconti = async(req:Request, {params})=>{
        const {id} = params
        const {nombreConti, habiConti} = await req.json()
        const putconti = await prisma.conti.update({
            where:{
                id
            },
            data:{
                nombreConti,
                habiConti
            }
        })
        return putconti
    }

    // metodo delete
    deleteconti = async(req:Request, {params})=>{
        const {id} = params
        const deleteconti = await prisma.conti.delete({
            where:{
                id
            }
        })
        return deleteconti
    }

    getContiOne = async(req:Request, {params})=>{
        const {id} = params
        const getcontione = await prisma.conti.findUnique({
            where:{
                id
            }
        })
        return getcontione
    }
}

export const contidetalle1 = new ContiDetalle()