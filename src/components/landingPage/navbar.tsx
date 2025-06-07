'use client'
import Image from "next/image"
import { fascinate, poppins } from "../ui/fonts"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter();
    const redirectLogin = () => {
        router.push('/login')
    }
    return (
        <>
            <div>
                <div className="flex items-center">
                    <div className={`flex ${fascinate.className} text-4xl text-[#421C86] m-10 sm:ml-20 w-fit`}>DayLog</div>
                    <div className="ml-auto mr-20">
                        <button className={`${poppins.className} bg-[#6e29c3] active:bg-[#b188e2] p-3 text-white font-black text-xl w-30 rounded-3xl hover:shadow-lg hover:ring-3 hover:ring-white hover:shadow-gray-400`} onClick={redirectLogin}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}