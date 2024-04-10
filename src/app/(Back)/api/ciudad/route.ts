import { NextResponse } from "next/server"
import { ciudad1 } from "./controller"


export const POST =async(req:Request)=>{
    try {
        return NextResponse.json(await ciudad1.postCiudad(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await ciudad1.getCiudad(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}