'use client'
import { useEffect, useState } from "react";
import { plexSerif, poppins, allura, ephesis } from "../ui/fonts";
import Link from "next/link";
export default function Homepage() {
    const [username, setUsername] = useState('');
    const [quote, setQuote] = useState('');
    const date = new Date();
    const currDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('/api/authentication/signup', {
                    method: 'GET'
                });
                const user = await res.json();
                setUsername(user.username);
            } catch (error: any) {
                console.log(error);
            }
        }
        getData();
    }, [])
    //get quotes
    useEffect(() => {
        const getQuote = async () => {
            try {
                const quote = await fetch('/api/getQuote', {
                    method: "GET",
                })
                const res = await quote.json();
                console.log("quote: ", res[0].quote);
                setQuote(res[0].quote);
            }
            catch (error: any) {
                console.log(error)
            }
        }
        getQuote();
    }, [])

    return (
        <>
            <div className="overflow-clip">
                <div className="m-5 ml-10">
                    <h1 className={`${poppins.className} text-4xl text-[#421C86] font-medium`}>Welcome {username}</h1>
                    <div className="sm:flex gap-x-10">
                        <div className=" bg-[#f9f5fa] rounded-2xl p-8 border-1 border-gray-300 mt-10">
                            <h1 className=" text-2xl font-semibold">Today's Log</h1>
                            <p className={`${plexSerif.className} text-[#3c2564] mt-2`}>Your journal is waiting for your thoughts. <br /> Start writing now!</p>
                            <button className="text-white p-3 w-40 bg-[#7543cb] active:bg-[#642fbf] hover:ring-white hover:ring-1 hover:shadow-gray-500 hover:shadow-lg font-bold rounded-2xl mt-5"><Link href={'/dashboard/writeLog'}>Start Journaling</Link></button>
                        </div>
                        <div className="bg-[#f9f5fa] rounded-2xl p-8 border-1 border-gray-300 mt-10">
                            <h1 className=" text-2xl font-semibold">Your Logs</h1>
                            <p className={`${plexSerif.className} text-[#3c2564] mt-2`}>Have a look back on your memories. <br /> Watch now!</p>
                            <button className="text-white p-3 w-40 bg-[#7543cb] active:bg-[#642fbf] hover:ring-white hover:ring-1 hover:shadow-gray-500 hover:shadow-lg font-bold rounded-2xl mt-5"><Link href={'/dashboard/myLog'}>Your Logs</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:absolute bottom-0 lg:flex justify-between m-5 overflow-clip bg-gradient-to-r from-pink-50 via-pink-200 to-purple-200 p-3 rounded-2xl">
                <div className={`${ephesis.className} text-2xl`}>
                    <span className="font-bold">Quote:</span> {quote}
                </div>
                <hr className="m-2" />
                 <div className={`flex ml-auto ${ephesis.className} text-2xl text-center`}>
                    <div className="flex font-bold">Date: </div> <div className="ml-3">{currDate}</div>
                </div>
            </div>
        </>
    )
}