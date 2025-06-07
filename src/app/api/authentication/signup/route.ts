import { ConnectDB } from "@/dbConnect/dbConnect";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req:NextRequest) {
    try {
        await ConnectDB();
        const body = await req.json();
        const {username , email , password} = body;
        console.log("body : ",body);

        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({message : "user already exist!"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createuser = new User({
            username,
            email,
            password : hashedPassword
        });
        const saved = await createuser.save();
        console.log("saved data",saved)

        return NextResponse.json({message : "signed up successfully"});


    } catch (error : any) {
        return NextResponse.json({error : error.message || "something went wrong"}, {status : 500});
    }
    
}