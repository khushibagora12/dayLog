'use client'

import { useEffect, useState } from "react";
import { barriecito } from "../../ui/fonts";
import Template from "./logTemplate";
import { Calendar } from "@/components/ui/calendar"
import React from "react";

export default function MyLogsPage() {
    const [logs, setLogs] = useState([]);
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12)
    )

    useEffect(() => {
        const getLogs = async () => {
            try {
                const res = await fetch('/api/logs', {
                    method: "GET"
                })
                const response = await res.json();
                console.log("get response", response);
                console.log("get userLog", response.userLog);
                setLogs(response.userLog)

            } catch (error: unknown) {
                console.log(error);
            }
        }
        getLogs();
    }, [])
    // console.log("log state", logs);
    const formatted = date ? `${date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}` : '';
    console.log(formatted);
    console.log("date:", date)
    return (
        <>
            <div className="m-10 mt-0">
                <h1 className={`${barriecito.className} text-4xl`}>My Logs</h1>
                <div className="m-10">
                    <Calendar
                        mode="single"
                        defaultMonth={date}
                        numberOfMonths={2}
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg border-1 border-purple-300 shadow-md bg-purple-50"
                    />
                </div>
                <hr className="text-gray-400"/>
                <div className=" mt-10 grid lg:grid-cols-2 gap-20">
                    {
                        logs &&
                        logs.map((log: any, idx: number) => (
                            <div key={idx}>
                                {log.date === formatted && <Template userData={log} />}
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
