'use client'
import { SmileyXEyes, SmileySad, SmileyMeh, Smiley, SmileyWink } from 'phosphor-react'
import { poppins } from '../ui/fonts'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function FeedbackPage() {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('')
    // const [idx, setIdx] = useState();
    const [isSent, setIsSent] = useState(false);
    const ratingFunction = (idx: number) => {
        setRating(idx);
    }
    const feedbackHandler = async (e : React.FormEvent) => {
        e.preventDefault();
        if(rating === 0 || feedback === ''){
            toast("Empty fields")
            return;
        }
        setIsSent(true);
        try {
            const data = {
                rating : rating,
                feedback : feedback
            }
            console.log(data)
            const res = await fetch('/api/feedback', {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            await res.json();
            if(res.ok){
                toast("feedback sent");
                setRating(0);
                setFeedback('');
            }
            setIsSent(false);
        } catch (error : unknown) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='flex justify-center m-5 overflow-clip h-[60%] w-[350px] lg:w-[800px] rounded-2xl bg-purple-50 border-1 border-purple-300'>
                <div className='items-center justify-center'>
                    <h1 className={`flex justify-center text-3xl text-[#36166c] m-5`}>Rate Your Experience</h1>
                    <hr className='m-5 text-gray-400' />
                    <div className='flex justify-center gap-5'>
                        <div className={`${rating === 1 ? "bg-black" : ""} rounded-4xl`} onClick={() => { ratingFunction(1) }}><SmileyXEyes size={50} weight={`${rating === 1 ? "fill" : "light"}`} className={` ${rating === 1 ? "text-red-500" : ""}`} /></div>
                        <div className={`${rating === 2 ? "bg-black" : ""} rounded-4xl`} onClick={() => { ratingFunction(2) }}><SmileySad size={50} weight={`${rating === 2 ? "fill" : "light"}`} className={`${rating === 2 ? "text-orange-500" : ""}`} /></div>
                        <div className={`${rating === 3 ? "bg-black" : ""} rounded-4xl`} onClick={() => { ratingFunction(3) }}><SmileyMeh size={50} weight={`${rating === 3 ? "fill" : "light"}`} className={`${rating === 3 ? "text-orange-300" : ""}`} /></div>
                        <div className={`${rating === 4 ? "bg-black" : ""} rounded-4xl`} onClick={() => { ratingFunction(4) }}><Smiley size={50} weight={`${rating === 4 ? "fill" : "light"}`} className={`${rating === 4 ? "text-yellow-200" : ""}`} /></div>
                        <div className={`${rating === 5 ? "bg-black" : ""} rounded-4xl`} onClick={() => { ratingFunction(5) }}><SmileyWink size={50} weight={`${rating === 5 ? "fill" : "light"}`} className={`${rating === 5 ? "text-yellow-400" : ""}`} /></div>
                    </div>
                    <div className='m-5'>
                        <div className={`${poppins.className} text-lg mt-10`}>Thanks, What is the reason for your rating?</div>
                        <textarea className='bg-white w-full h-[100px] rounded-2xl p-3 mt-5 border-1 border-purple-300 focus:outline-none' placeholder='Add your feedback.'
                        value={feedback}
                        onChange={(e) => {
                            setFeedback(e.target.value)
                        }}
                        />
                        <button className="p-2 bg-[#6e29c3] active:bg-[#58209d] text-white font-bold w-[100%] rounded-2xl mt-2" onClick={feedbackHandler}>{isSent === true?"Sending...":"Submit feedback"}</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}