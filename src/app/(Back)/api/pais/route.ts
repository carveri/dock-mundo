import { NextResponse } from "next/server"
import { pais1 } from "./controller"


// ruta post
export const POST =async(req:Request)=>{
    try {
        return NextResponse.json(await pais1.postPais(req))
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}

// ruta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await pais1.getPais(req))
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}