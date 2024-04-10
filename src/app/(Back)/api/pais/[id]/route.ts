import { NextResponse } from "next/server"
import { paisdetalle1 } from "./controller"
import { InterParams } from "@/app/(Back)/Schemas/params"


// ruta put
export const PUT =async(req:Request, {params}:InterParams)=>{
    try {
        return NextResponse.json(await paisdetalle1.putPais(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

//ruta delete 
export const DELETE =async(req:Request, {params}:InterParams)=>{
    try {
        return NextResponse.json(await paisdetalle1.deletePais(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

//ruta getone
export const GET = async(req:Request, {params}:InterParams)=>{
    try {
        return NextResponse.json(await paisdetalle1.getOnePais(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}