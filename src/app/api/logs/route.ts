import { NextRequest, NextResponse } from "next/server";
import UserLog from "./db";
import { ConnectDB } from "@/dbConnect/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; 
import { getErrorMessage } from "@/lib/errorHandler";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)
    try {
        await ConnectDB();
        const body = await req.json();
        console.log("userid: " + session?.user.id);
        const { userLog } = body;

        const findUser = await UserLog.findOne({ userId : session?.user.id });
        console.log("userFound: ", findUser)
        if (findUser) {
            console.log("user found pushing log: ", userLog)    
            findUser.userLog.push( userLog )
            await findUser.save();
            console.log("updating existing user: ", findUser);
            return NextResponse.json({ message: "Log saved successfully" });
        }
        else{
            const user = new UserLog({
                userId : session?.user.id,
                userLog
            }
            )
            await user.save();
            console.log(user);
        }
        return NextResponse.json({ message: "Log saved successfully" });

    } catch (error: unknown) {
        console.log("in catch: ", error)
        return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 })

    }
}

export async function GET() {
    const session = await getServerSession(authOptions)
    try {
        await ConnectDB();
        const findUser = await UserLog.findOne({userId : session?.user.id})
        if(!findUser){
            return NextResponse.json({message : "unauthorized"});
        }
        return NextResponse.json(findUser);
    } 
    catch (error : unknown) {
        return NextResponse.json({error : getErrorMessage(error)}, {status : 500})
    }
}