import { NextResponse } from "next/server";

export async function GET(req : Request) {
    try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes',{
            method : "GET", 
            headers : {
                'X-Api-Key': process.env.NINJA_API_KEY!,
            }
        })
        if(!res.ok){
            return NextResponse.json({message : "failed to fetch quote"})
        }
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error : any) {
        return NextResponse.json({error : error.message})
    }
}