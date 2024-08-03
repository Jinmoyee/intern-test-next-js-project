"use client"

import { Circle } from 'rc-progress'
import React from 'react'
import { LuGoal } from "react-icons/lu";

export default function Circlechart() {
    return (
        <div className='flex justify-center mt-10 relative'>
            <LuGoal className='absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto text-red-500' size={40} />
            <Circle
                height={150}
                width={150}
                percent={75}
                strokeColor="#007bff"
                trailColor="#cfe5fa"
                strokeLinecap="square"
                strokeWidth="10"
                trailWidth="10" />
        </div>
    )
}
