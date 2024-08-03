"use client"

import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Linechart() {
    const data = [
        { numberOfStudents: 1, percentage: "0" },
        { numberOfStudents: 5, percentage: "25" },
        { numberOfStudents: 15, percentage: "50" },
        { numberOfStudents: 3, percentage: "75" },
        { numberOfStudents: 1, percentage: "100" },
    ]
    return (
        <div>
            <ResponsiveContainer width="100%" minHeight={300}>
                <LineChart data={data}>
                    <CartesianGrid />
                    <XAxis dataKey="percentage" />
                    <Tooltip />
                    <Line dataKey="numberOfStudents" type="monotone" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
