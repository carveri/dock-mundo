import { NextResponse } from "next/server"
import { conti1 } from "./controller"



export const POST =async(req:Request)=>{
    try {
        return NextResponse.json(await conti1.postConti(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const GET =async(req:Request)=>{
    try {
        return NextResponse.json(await conti1.getConti(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}