import { toast, ToastContainer } from "react-toastify";
import { poppins } from "../ui/fonts";
import { useState, useEffect } from "react";
import { Pencil } from 'lucide-react'
import { signOut } from "next-auth/react";

export default function ProfilePage() {
    const [userdetails, setUserdetails] = useState({
        username : '',
        email : ''
    });
    const [updatedusername, setUpdatedusername] = useState('');
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('/api/authentication/signup', {
                    method: 'GET'
                });
                const user = await res.json();
                setUserdetails({...userdetails, username : user.username, email : user.email});
            } catch (error: any) {
                console.log(error);
            }
        }
        getData();
    }, [])
    const updateusername = async () => {
        if (updatedusername === '') {
            toast("empty field");
            return;
        }
        try {
            const res = await fetch('/api/authentication/signup', {
                method: 'PUT',
                body: JSON.stringify({ username: updatedusername })
            })
            if (res.ok) {
                setEdit(false);
                toast("Username udated successfully");
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
        } catch (error: any) {
            console.log(error)
        }
    }
    const editField = () => {
        setEdit(true)
    }
    return (
        <>
            <div className="m-10 mt-5 w-full">
                <h1 className={`${poppins.className} text-3xl text-[#421C86] font-bold`}>My Profile</h1>
                <div className="flex gap-20 ">
                    <div className="h-[300px] w-[400px] bg-[#f9f5fa] rounded-2xl p-8 border-1 border-gray-300 mt-10 gap-20">
                        <div className={`flex bg-[#f2e4f6] p-2 rounded-2xl ${edit === true ? "hidden" : "flex"}`}>
                            <div className="text-lg font-bold text-[#311267]">Username : </div>
                            <div className="text-lg ml-2">{userdetails.username}</div>
                            <div className="ml-auto items-center" onClick={editField}><Pencil strokeWidth={1} /></div>
                        </div>
                        <div className={`flex bg-[#f2e4f6] p-2 rounded-2xl ${edit === true ? "flex" : "hidden"}`}>
                            <input type="text" placeholder="Update Username" className="bg-[#f9f5fa] p-1 rounded-xl focus:outline-none" value={updatedusername} onChange={(e) => {
                                setUpdatedusername(e.target.value);
                            }} />
                            <div className="ml-auto bg-[#c453e0] p-1 text-white font-bold rounded-xl active:bg-[#a240bb]"><button onClick={updateusername}>Confirm</button></div>
                        </div>
                        <div className={`flex bg-[#f2e4f6] p-2 rounded-2xl mt-5`}>
                            <div className="text-lg font-bold text-[#311267]">Email : </div>
                            <div className="text-lg ml-2">{userdetails.email}</div>
                        </div>

                    </div>
                    <div className="h-[300px] w-[400px] bg-[#f9f5fa] rounded-2xl p-8 border-1 border-gray-300 mt-10">
                        <h1 className="text-2xl font-bold">LogOut</h1>
                        <button className="w-full bg-red-500 p-2 mt-5 rounded-2xl text-white font-bold active:bg-red-600" onClick={() => {signOut({callbackUrl : '/login'})}}>Logout</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}