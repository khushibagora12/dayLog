'use client'

import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { poppins, plexSerif } from '@/components/ui/fonts';
import Link from "next/link";

export default function Signup() {
    const [submit, setSubmit] = useState(false);
    const [signupData, setsignupData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const router = useRouter();
    async function submitHandler(e: React.FormEvent) {
        if(signupData.username === '' || signupData.email === '' || signupData.password === ''){
                    toast("All fields are required")
                    return;
                }
        e.preventDefault();
        setSubmit(true);
        try {
            const res = await fetch('/api/authentication/signup', {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify(signupData)
            })
            const response = await res.json();
            toast(response.message);

            if (response.message === 'signed up successfully') {
                setsignupData({ ...signupData, username: '', email: '', password: '' })
                router.push('/login');
            }

        } catch (error: any) {
            console.log(error);
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
                        <p className={`${poppins.className} text-2xl font-medium`}>Get Started Now</p>
                        <p className={`${poppins.className} text-gray-500 text-xs/5 mt-3`}>Your thoughts. Your memories. Your space. <br /> Sign up to make it truly yours.</p>
                        <form className="mt-5">
                            <div>
                                <label htmlFor="username" className={`${poppins.className} text-sm font-light`}>Username</label><br />
                                <input name="username" type="text" placeholder="Enter username" className="border-2 border-gray-200 rounded-xl p-2 w-60 focus:outline-none focus:bg-[#f6f3fd]"
                                    value={signupData.username}
                                    onChange={(e) => {
                                        setsignupData({ ...signupData, username: e.target.value })
                                    }} />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="email" className={`${poppins.className} text-sm font-light`}>Email</label><br />
                                <input name="email" type="email" placeholder="Enter email" className="border-2 border-gray-200 rounded-xl p-2 w-60 focus:outline-none focus:bg-[#f6f3fd]"
                                    value={signupData.email}
                                    onChange={(e) => {
                                        setsignupData({ ...signupData, email: e.target.value })
                                    }} />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="password" className={`${poppins.className} text-sm font-light`}>Password</label><br />
                                <input name="password" type="password" placeholder="Enter password" className="border-2 border-gray-200 rounded-xl p-2 w-60 focus:outline-none focus:bg-[#f6f3fd]"
                                    value={signupData.password}
                                    onChange={(e) => {
                                        setsignupData({ ...signupData, password: e.target.value })
                                    }} />
                            </div>

                            <button className="mt-5 w-60 p-2 rounded-xl text-white font-bold bg-gradient-to-r from-[#6e29c3] to-[#ceb4ee] active:from-[#6e29c3] hover:shadow-lg hover:ring-3 hover:ring-white hover:shadow-gray-400 active:to-[#6e29c3]" onClick={submitHandler}>{submit === true ? "submitting" : "SignUp"}</button>
                        </form>
                        <div className={`mt-5 ${plexSerif.className} text-[#545454] text-sm`}>Already have an account?<Link href={'/login'} className="font-bold">SignIn</Link></div>
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