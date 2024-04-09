import prisma from "@/libs/prisma"


class PaisTotal {

    // metodo get
    getPaisTotal = async(req:Request)=>{
        const getAllPaisTotal = await prisma.pais.findMany()
        const mapeo = getAllPaisTotal.map((element)=>{
            return element.habitantes
        })
        const total = mapeo.reduce((acu, cur)=>{
            return acu + cur
        })
        return total
    }
}


export const paisTotal1 = new PaisTotal()