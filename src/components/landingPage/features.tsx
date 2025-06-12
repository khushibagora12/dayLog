import { plexSerif, poppins } from "../ui/fonts";

export default function Features() {
    return (
        <>
        <h1 className={`${poppins.className} text-4xl text-[#421C86] font-bold flex justify-center`}>Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:ml-30 lg:mr-30 p-10 items-center">
                <div className="flex h-[100%] justify-center items-center bg-gradient-to-br from-pink-50 via-pink-200 to-purple-400 rounded-2xl">
                    <div className="p-3 m-3 bg-purple-50 rounded-2xl border-1 border-purple-200">
                        <h2 className={`flex justify-center ${poppins.className} font-semibold text-center text-xl m-5`}>Simple & Minimal Journaling</h2>
                        <div className={`${plexSerif.className} text-sm text-center`}>{"DayLog provides a clean, clutter-free space for you to write your thoughts, feelings, and daily experiences. The minimalist design helps you focus on expressing yourself without distractions. Whether you're jotting down a quick reflection or pouring your heart out, DayLog makes it easy and calming to build a consistent journaling habit."}</div>
                    </div>
                </div>
                <div className="flex h-[100%] justify-center items-center bg-gradient-to-br from-pink-50 via-pink-200 to-purple-400 rounded-2xl">
                    <div className="p-3 m-3 bg-purple-50 rounded-2xl border-1 border-purple-200">
                        <h2 className={`flex justify-center ${poppins.className} font-semibold text-center text-xl m-5`}>Organized by Date with Calendar Access</h2>
                        <div className={`${plexSerif.className} text-sm text-center`}>Each log is automatically saved based on the date you write it. With the interactive calendar, you can revisit past entries by simply clicking on a specific date. This intuitive navigation allows you to reflect on your past thoughts, track your emotional patterns, and see how far you’ve come — all in just a few clicks.</div>
                    </div>
                </div>
                <div className="flex h-[100%] justify-center items-center bg-gradient-to-br from-pink-50 via-pink-200 to-purple-400 rounded-2xl">
                    <div className="p-3 h-[92%] m-3 bg-purple-50 rounded-2xl border-1 border-purple-200">
                        <h2 className={`flex justify-center ${poppins.className} font-semibold text-center text-xl m-5`}>100% Private & Personal</h2>
                        <div className={`${plexSerif.className} text-sm text-center`}>Your privacy is our priority. All your entries are kept secure and completely confidential, giving you peace of mind that your journal is for your eyes only. DayLog is your personal digital diary — a space to be honest, vulnerable, and real without fear of judgment or exposure.</div>
                    </div>
                </div>
            </div>
        </>
    )
}