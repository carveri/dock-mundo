import prisma from "@/libs/prisma"


class PaisOne {

    // metodo delete
    deletePais = async(req:Request, {params})=>{
        const {id} = await params
        const deletePais = await prisma.pais.delete({
            where: {
                id
            }
        })
        return deletePais
    }
}

export const paisOne1 = new PaisOne()