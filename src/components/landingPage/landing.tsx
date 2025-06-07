'use client'

import { poppins } from "../ui/fonts"
import Navbar from "./navbar"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Landing() {
    const router = useRouter();
    const redirectsignup = () => {
        router.push('/signup')
    }
    return (
        <>
            <div className="flex justify-center items-center bg-linear w-full overflow-clip">
                <div className=" w-[85%] sm:w-[95%] h-[90%] m-10 mt-10 bg-white rounded-2xl">
                    <section id="front" className="h-screen">
                    <div>
                        <Navbar />
                    </div>
                    <div className="grid grid-cols-1">
                        <div className={`flex justify-center mt-30 text-center ${poppins.className} text-5xl sm:text-6xl font-semibold`}>
                            <div className="text-[#421C86]">Your <span className="text-[#631C86]">personal</span> <br /> journal</div>
                        </div>
                        <div className={`m-auto mt-5 ${poppins.className} text-center text-[#7a5bae] `}>Record your thoughts and memories <br />in a private online journal</div>
                        <div className="m-auto">
                            <button className={`${poppins.className} bg-gradient-to-r from-[#6e29c3] to-[#ceb4ee] active:from-[#6e29c3] hover:shadow-lg hover:ring-3 hover:ring-white hover:shadow-gray-400 active:to-[#6e29c3] p-3 text-white font-black text-xl rounded-4xl mt-5`} onClick={redirectsignup}>Get Started</button>
                        </div>  

                    </div>
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // width="70"
                            // height="70"
                            fill="none"
                            stroke="#7516ac"
                            strokeWidth="0.25"
                            viewBox="0 0 24 24"
                            className="absolute left-[75%] sm:w-40 sm:h-40 md:w-20 md:h-20 md:bottom-20 "
                        >
                            <path d="M12 2C12 7 7 12 2 12C7 12 12 17 12 22C12 17 17 12 22 12C17 12 12 7 12 2Z" />
                        </svg>
                    </div>
                    <div className="relative hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="170"
                            height="170"
                            fill="none"
                            stroke="#7516ac"
                            strokeWidth="0.15"
                            viewBox="0 0 24 24"
                            className="absolute left-[80%] md:bottom-0"
                        >
                            <path d="M12 2C12 7 7 12 2 12C7 12 12 17 12 22C12 17 17 12 22 12C17 12 12 7 12 2Z" />
                        </svg>
                    </div>
                    </section>
                    <section className="h-screen">
                        <div className="flex justify-center">
                            <Image src={'/journal.png'} alt="demo" height={100} width={400} className="rounded-xl"/>
                        </div>
                    </section>
                </div>
                <div className="relative hidden md:block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="180"
                        height="180"
                        fill="none"
                        stroke="#7516ac"
                        strokeWidth="0.15"
                        viewBox="0 0 24 24"
                        className="absolute md:right-342 md:bottom-2"
                    >
                        <path d="M12 2C12 7 7 12 2 12C7 12 12 17 12 22C12 17 17 12 22 12C17 12 12 7 12 2Z" />
                    </svg>
                </div>
                <div className="relative block md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="none"
                        stroke="#7516ac"
                        strokeWidth="0.15"
                        viewBox="0 0 24 24"
                        className="absolute right-80 bottom-50 sm:right-130 sm:bottom-30"
                    >
                        <path d="M12 2C12 7 7 12 2 12C7 12 12 17 12 22C12 17 17 12 22 12C17 12 12 7 12 2Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}