import { ConnectDB } from "@/dbConnect/dbConnect";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

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
export async function GET() {
    const session = await getServerSession(authOptions);
    if(!session || !session?.user.id){
        return NextResponse.json("unauthorized");
    }
    try {
        await ConnectDB();
        const user = await User.findById(session?.user.id);
        console.log("user: ", user);
        return NextResponse.json(user);
    } 
    catch (error : any) {
        return NextResponse.json({error: error.message || "something went wrong"}, {status : 500})
    }
}

export async function PUT(req : NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if(!session || !session?.user.id){
        return NextResponse.json("unauthorized");
    }
        await ConnectDB();
        const body = await req.json();
        const update = await User.findByIdAndUpdate(session?.user.id, {username : body.username})
        console.log(update);
        return NextResponse.json(update);
    } catch (error : any) {
        return NextResponse.json({error : error.message})
    }
}