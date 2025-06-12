'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { poppins, plexSerif } from '@/components/ui/fonts';
import Link from "next/link";

export default function Login() {
    const [submit, setSubmit] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const router = useRouter();
    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        if(loginData.email === '' || loginData.password === ''){
            toast("All fields are required")
            return;
        }
        setSubmit(true);
        try {
            const res = await signIn("credentials", {
                email: loginData.email,
                password: loginData.password,
                redirect: false,
            })
            if (!res?.ok) {
                console.log("sign in failed")
                toast("invalid credentials")
                setSubmit(false);
                setLoginData({...loginData, email : '', password : ''})
                return;
            }
            if (res.ok) {
                console.log("successfully signed in")
                toast("Signed In successfully");
                setLoginData({...loginData, email : '', password : ''})
                router.replace("/dashboard");
            }
        } catch (error : unknown) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="flex justify-center items-center h-svh overflow-clip bg-linear w-full ">
                <div className="flex flex-col md:flex-row items-center justify-center w-full h-[90%] m-10 bg-white rounded-2xl">
                    <div className="block md:hidden m-3">
                        <Image src={'/auth.jpg'} alt="loginImage" height={10} width={900} className="rounded-xl" />
                    </div>
                    <div className="justify-center m-auto">
                        <p className={`${poppins.className} text-2xl font-medium`}>Welcome Back</p>
                        <p className={`${poppins.className} text-gray-500 text-xs/5 mt-3`}>Your story continues here. <br /> Let your thoughts breathe in peace.</p>
                        <form className="mt-5">
                            <div>
                                <label htmlFor="email" className={`${poppins.className} text-sm font-light`}>Email</label><br />
                                <input name="email" type="email" placeholder="Enter email" className="border-2 border-gray-200 rounded-xl p-2 w-60 focus:outline-none focus:bg-[#f6f3fd]"
                                    value={loginData.email}
                                    onChange={(e) => {
                                        setLoginData({ ...loginData, email: e.target.value })
                                    }
                                    } />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="paswsord" className={`${poppins.className} text-sm font-light`}>Password</label><br />
                                <input name="password" type="password" placeholder="Enter password" className="border-2 border-gray-200 rounded-xl p-2 w-60 focus:outline-none focus:bg-[#f6f3fd]"
                                    value={loginData.password} onChange={(e) => {
                                        setLoginData({ ...loginData, password: e.target.value })
                                    }
                                    } />    
                            </div>
                            <button className="mt-5 w-60 p-2 text-white font-bold rounded-xl bg-gradient-to-r from-[#6e29c3] to-[#ceb4ee] active:from-[#6e29c3] hover:shadow-lg hover:ring-3 hover:ring-white hover:shadow-gray-400 active:to-[#6e29c3]" onClick={submitHandler}>{submit === true ? "submitting" : "SignIn"}</button>
                        </form>
                        <div className={`mt-5 ${plexSerif.className} text-[#545454] text-sm`}>{"Don't have an account?"}<Link href={'/signup'} className="font-bold">SignUp</Link></div>
                    </div>
                    <div className="hidden md:block mr-5 ml-auto">
                        <Image src={'/auth.jpg'} alt="loginImage" height={10} width={900} className="rounded-xl" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}