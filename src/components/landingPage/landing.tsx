'use client'

import { fascinate, plexSerif, poppins } from "../ui/fonts"
import Aboutus from "./aboutUs"
import Features from "./features"
import Navbar from "./navbar"
import { useRouter } from "next/navigation"
import Link from "next/link"

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
                        <div className="grid grid-cols-1 sm:mt-20">
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
                    <section id="aboutUs" className=" sm:h-screen">
                        <Aboutus />
                    </section>
                    <section id="features" className=" sm:h-screen">
                        <Features />
                    </section>
                    <footer >
                        <div className="bg-[#ccb6f3] h-fit rounded-t-4xl p-10">
                            <h1 className={`flex justify-center items-center ${poppins.className} text-3xl text-[#35146f] font-bold text-center`}>Ready to Make Journaling a Daily Habit?</h1>
                            <p className={`flex justify-center items-center ${poppins.className} tracking-widest text-center m-2`}>Track your thoughts and growth — journaling made easy with DayLog.</p>
                            <div className="flex justify-center"><button className={`${poppins.className} bg-gradient-to-r from-[#4b158d] to-[#7435c1] active:from-[#6e29c3] hover:shadow-lg hover:ring-3 hover:ring-white hover:shadow-gray-400 active:to-[#6e29c3] p-3 text-white font-black text-xl rounded-xl mt-5`} onClick={redirectsignup}>Get Started</button></div>
                        </div>
                        <div className="bg-purple-100 h-fit p-5">
                            <div className="flex justify-center items-center">
                                <div className="grid md:grid-cols-3 gap-x-20 items-center">
                                    <div className="flex-row items-center m-5">
                                        <div className={`${fascinate.className} text-4xl text-[#421C86]`}>DayLog</div>
                                        <div className={`${plexSerif.className} text-sm `}>Private online journal</div>
                                    </div>
                                    <div className="flex-row items-center m-5">
                                        <h2 className="font-bold">Company</h2>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'#home'}>Get Started</Link></div>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'#home'}>Login</Link></div>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'#aboutUs'}>About Us</Link></div>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'#features'}>Features</Link></div>
                                    </div>
                                    <div className="flex-row items-center m-5">
                                        <h2 className="font-bold">Support</h2>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'#home'}>Help Center</Link></div>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'#home'}>Terms of services</Link></div>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'#home'}>privacy policy</Link></div>
                                        <div className="hover:text-purple-800 hover:underline"><Link href={'mailto:khushibagora76@gmail.com'}>Contact us</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
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
                        className="absolute right-342 bottom-230"
                    >
                        <path d="M12 2C12 7 7 12 2 12C7 12 12 17 12 22C12 17 17 12 22 12C17 12 12 7 12 2Z" />
                    </svg>
                </div>
                <div className="relative block sm:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="none"
                        stroke="#7516ac"
                        strokeWidth="0.15"
                        viewBox="0 0 24 24"
                        className="absolute right-90 bottom-440"
                    >
                        <path d="M12 2C12 7 7 12 2 12C7 12 12 17 12 22C12 17 17 12 22 12C17 12 12 7 12 2Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}