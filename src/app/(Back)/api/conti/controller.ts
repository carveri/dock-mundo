import prisma from "@/libs/prisma"

class Conti {
    // metodo post
    postConti =async(req:Request)=>{
        const {nombreConti, habiConti} = await req.json()
        const postconti = await prisma.conti.create({
            data: {
                nombreConti,
                habiConti
            }
        })
        return postconti
    }

    // metodo get
    getConti =async(req:Request)=>{
        const getconti = await prisma.conti.findMany()
        return getconti
    }
}

export const conti1 = new Conti()