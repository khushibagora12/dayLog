'use client'
import { signOut } from "next-auth/react";
export default function Home() {
  return (
    <>
    <h1 className="text-3xl ">dashboard</h1> 
    <button onClick={() => {signOut({callbackUrl : '/login'})}}>Logout</button>  
    </>
  );
}
