import {
    Card,
    CardAction,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { niconne, shantel } from "@/components/ui/fonts"
import Image from "next/image"

type UserData = {
    title : string,
    log : string,
    date : string,
    image : string
}

export default function Template({userData} : { userData: UserData }) {
    // console.log("template: ", userData);
    // console.log("template: ", userData.title);

    return (
        <>
            <Card className="h-fit lg:w-[500px] mt-5 mb-5">
                <CardHeader>
                    <CardTitle className={`${niconne.className} text-3xl font-bold`}>My Journal</CardTitle>
                    <CardAction className={`${niconne.className} text-2xl font-bold`}>{userData.date}</CardAction>
                </CardHeader>
                <CardContent>
                    <div className="flex">
                        <Image src={userData.image} height={50} width={100} alt="image" className="rounded-2xl"/>
                        <div className={`${niconne.className} text-2xl font-black m-5 bg-gray-200 w-[70%] rounded-2xl p-2`}> Title:
                            <div className={`${shantel.className} text-xl`}>{userData.title}</div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className={`${niconne.className} text-3xl font-bold`}>Learning From The Day</h3>
                        <div className={`${shantel.className} bg-gray-200 h-[300px] text-lg w-[90%] mt-5 p-2 rounded-2xl`}>{userData.log}</div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}