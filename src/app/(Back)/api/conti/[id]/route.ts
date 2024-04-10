import { NextResponse } from "next/server"
import { contidetalle1 } from "./controller"
import { InterParams } from "@/app/(Back)/Schemas/params"



// ruta put
export const PUT =async(req:Request, {params}:InterParams)=>{
    try {
        return NextResponse.json(await contidetalle1.putconti(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta delete
export const DELETE = async(req:Request, {params}:InterParams)=>{
    try {
        return NextResponse.json(await contidetalle1.deleteconti(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta oneconti
export const GET = async(req:Request, {params}:InterParams)=>{
    try {
        return NextResponse.json(await contidetalle1.getContiOne(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}