import { NextResponse } from "next/server"
import { paisOne1 } from "./controller"


export const DELETE =async(req:Request, {params})=>{
    try {
        return NextResponse.json(await paisOne1.deletePais(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}