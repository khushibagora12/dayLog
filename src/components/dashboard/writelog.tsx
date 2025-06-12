import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import { barriecito, plexSerif } from "../ui/fonts";
import Image from "next/image";

export default function WriteLogPage() {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [log, setLog] = useState('');

    const logHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title === '' || log === '') {
            toast("Empty Fields");
            return;
        }
        const currdate = new Date();
        const today = currdate.getDate() + "/" + (currdate.getMonth() + 1) + "/" + currdate.getFullYear();
        try {
            //save image in cloudinary
            if (!image) return;
            const formdata = new FormData();
            formdata.append('file', image)
            formdata.append('upload_preset', 'logImage');

            const imgCloudinary = await fetch('https://api.cloudinary.com/v1_1/dmkwymeim/image/upload', {
                method: "POST",
                body: formdata
            });
            if (!imgCloudinary.ok) {
                throw new Error("Cloudinary upload failed");
            }
            const imgRes = await imgCloudinary.json();
            let imgUrl = imgRes.secure_url;
            // const img = imgUrl
            console.log(imgUrl);
            // console.log(img);
            const logData = {
                title: title,
                image: imgUrl,
                log: log,
                date: today
            }
            console.log("log data: ", logData)
            const res = await fetch('/api/logs', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ userLog: logData })
            })
            const response = await res.json();
            if(res.ok){
                toast(response.message);
                setTitle('');
                setImage(null);
                setLog('')
                imgUrl = ''
            }
            else{
                toast("failed")
            }
        } catch (error: unknown) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="lg:flex items-center m-10 mt-0 overflow-clip">
                <div className="">
                    <h1 className={`${barriecito.className} text-4xl`}>Journal Entry</h1>
                    <div>
                        <div className="lg:flex mt-10">
                            <div className={`${plexSerif.className} p-2 font-bold text-[#36166c]`}>Title: </div>
                            <input type="text" className="w-[100%] bg-purple-50 p-2 rounded-2xl border-1 border-purple-300 focus:outline-none" placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div className={`${plexSerif.className} p-2 font-bold text-[#36166c]`}>Image:</div>
                            <input type="file" accept="image/*" className="w-[100%] bg-purple-50 p-2 rounded-2xl border-1 border-purple-300 focus:outline-none" onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setImage(file);
                                }
                            }} />
                        </div>
                        <div className={`${plexSerif.className} p-2 font-bold text-[#36166c]`}>Log:</div>
                        <textarea name="content" className="bg-purple-50 p-2 rounded-2xl border-1 border-purple-300 focus:outline-none w-[100%] h-[400px]" placeholder="Write you journal here."
                            value={log}
                            onChange={(e) => setLog(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={logHandler} className="p-2 bg-[#6e29c3] active:bg-[#58209d] text-white font-bold w-[100%] rounded-2xl mt-2">save</button>
                </div>
                <div className="flex-row m-10 lg:m-0 lg:ml-20 rounded-3xl">
                <Image src={'/journal.png'} alt="preview img" height={50} width={400} className=" shadow-[-10px_10px_30px_rgba(0,0,0,0.3)] rounded-3xl "/>
                <div className={`flex justify-center text-2xl ${plexSerif.className} `}>Preview</div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}