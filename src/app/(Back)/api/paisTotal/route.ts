import { NextResponse } from "next/server"
import { paisTotal1 } from "./controller"


export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await paisTotal1.getPaisTotal(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}