import { NextResponse } from "next/server"
import { ciudaddetalle } from "./controller"


// ruta put
export const PUT =async(req: Request, {params})=>{
    try {
        return NextResponse.json(await ciudaddetalle.putOneCiudad(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta delete 
export const DELETE = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await ciudaddetalle.deleteOneCiudad(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta getone
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await ciudaddetalle.getOneCiudad(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}