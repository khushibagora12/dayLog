import Image from "next/image"
import { plexSerif, cinzel, poppins } from "../ui/fonts"

export default function Aboutus() {
    return (
        <>
            <h2 className={`flex justify-center lg:block text-[#421C86] lg:ml-95 ${poppins.className} text-3xl font-semibold`}>About Us</h2>
            <hr className="m-3 ml-[25%] mr-[25%]" />
            <div className="sm:flex justify-center">
                <div className="flex justify-center w-[100%] md:w-[60%] lg:w-[20%]">
                    {/* <div className=""> */}
                    <div className={`${plexSerif.className} text-[#2a1352] w-[100%] p-5 m-2 text-sm`}>At DayLog, we believe that your thoughts, emotions, and experiences deserve a safe, personal space. Whether you're celebrating small victories, processing tough days, or simply reflecting on life's journey, DayLog is here to support you.</div>
                    {/* </div> */}
                </div>
                <div className="hidden sm:flex">
                    <Image src={'/home1.jpg'} alt="demo" height={50} width={200} className="rounded-xl m-5 hidden lg:flex" />
                    <Image src={'/home2.jpg'} alt="demo" height={50} width={200} className="rounded-xl m-5" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-15">
                <div className="sm:flex lg:w-[50%] border-purple-400 border-1 m-5">
                    <div><Image src={'/journal.png'} alt="demo" height={100} width={200} className=" m-5 rounded-xl" /></div>
                    <div className="w-[100%] m-5">
                        <h1 className={`${cinzel.className} text-[#3e1d78] text-xl font-semibold ml-7`}>Why DayLog ?</h1>
                        <div className={`${plexSerif.className} text-[#2a1352] p-2 lg:p-5 m-2 `}>We're more than just a digital journal — we're your daily companion for mindful living, self-expression, and emotional well-being. Built with privacy at its core, DayLog ensures that your entries remain truly yours. No judgment. No noise. Just you and your words.</div>
                    </div>
                </div>
            </div>
        </>
    )
}