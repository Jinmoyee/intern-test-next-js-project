"use client"

import Sidebar from '@/components/sidebar/Sidebar'
import html from '../../../public/assets/html.png'
import Image from 'next/image'
import { GoTrophy } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { IoShieldCheckmark } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { Line, LineChart } from 'recharts';
import Linechart from '@/components/graph/Linechart';
import Circlechart from '@/components/graph/Circlechart';

export default function Skills() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='border-l min-h-screen pl-10 pt-7 pr-7'>
                <h2 className='text-gray-600 text-lg'>Skill Test</h2>
                <div className='border rounded-lg mt-5 flex items-center gap-3 p-3'>
                    <Image
                        src={html}
                        alt="HTML pic"
                        className='h-[90px] w-[90px]'
                    />
                    <div>
                        <h5 className='text-lg font-bold'>Hyper Text Markup Language</h5>
                        <p className='text-base text-gray-600'>Question: 08 | Duration : 15 mins | Submitted on 12 July 2018</p>
                    </div>


                    <button className='border-2 border-black bg-blue-700 text-white px-4 py-2 rounded-lg'>Update</button>
                </div>

                <div className='border rounded-lg mt-5 p-3 pl-6'>
                    <h5 className='text-lg font-bold mb-6'>Quick Statistics</h5>
                    <div className='flex justify-around mb-6'>
                        <div className='flex gap-5 items-center border-r pr-7'>
                            <GoTrophy className='rounded-full bg-slate-700 text-white p-2' size={45} />
                            <div>
                                <h6 className='font-bold text-black text-lg'>1</h6>
                                <p className='uppercase text-gray-500 '>Your Rank</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center border-r pr-7'>
                            <CiCalendar className='rounded-full bg-slate-700 text-white p-2' size={45} />
                            <div>
                                <h6 className='font-bold text-black text-lg'>56%</h6>
                                <p className='uppercase text-gray-500 '>Percentage</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <IoShieldCheckmark className='rounded-full bg-slate-700 text-white p-2' size={45} />
                            <div>
                                <h6 className='font-bold text-black text-lg'>10/15</h6>
                                <p className='uppercase text-gray-500 '>Correct Answers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border rounded-lg mt-5 p-3 pl-6 pr-6'>
                    <div className='flex items-center justify-between mb-3'>
                        <div>
                            <h5 className='text-lg font-bold mb-3'>Comparison Graph</h5>
                            <p className='text-base text-gray-600 max-w-[35rem]'>
                                <span className='font-bold'>You scored 30% percentile</span> which is lower than the average percentile 72% of all who took the assignment
                            </p>
                        </div>
                        <SlGraph className='rounded-full bg-slate-700 text-white p-2' size={45} />
                    </div>
                    <Linechart />
                </div>
            </div>

            <div className='w-[30%] mt-14'>
                <div className='border rounded-lg mt-5 p-3 pl-6'>
                    <h5 className='text-lg font-bold mb-8'>Syllabus Wise Analysis</h5>
                    <div>
                        <div className=''>
                            <h6 className='mb-2 mt-7'>HTML Tools, Forms, History</h6>
                            <div className='flex items-center gap-7'>
                                <div className='w-full bg-blue-100 rounded-2xl overflow-hidden h-3'>
                                    <div className='bg-blue-400 w-[80%] text-xs text-blue-400'>!!!</div>
                                </div>
                                <span className='text-blue-400 font-bold'>80%</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=''>
                            <h6 className='mb-2 mt-7'>Tags & References in HTML</h6>
                            <div className='flex items-center gap-7'>
                                <div className='w-full bg-orange-100 rounded-2xl overflow-hidden h-3'>
                                    <div className='bg-orange-400 w-[60%] text-xs text-orange-400'>!!!</div>
                                </div>
                                <span className='text-orange-400 font-bold'>60%</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=''>
                            <h6 className='mb-2 mt-7'>Tables & References in HTML</h6>
                            <div className='flex items-center gap-7'>
                                <div className='w-full bg-red-100 rounded-2xl overflow-hidden h-3'>
                                    <div className='bg-red-400 w-[80%] text-xs text-red-400'>!!!</div>
                                </div>
                                <span className='text-red-400 font-bold'>80%</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=''>
                            <h6 className='mb-2 mt-7'>Tables and CSS basics</h6>
                            <div className='flex items-center gap-7 mb-5'>
                                <div className='w-full bg-green-100 rounded-2xl overflow-hidden h-3'>
                                    <div className='bg-green-400 w-[96%] text-xs text-green-400'>!!!</div>
                                </div>
                                <span className='text-green-400 font-bold'>96%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border rounded-lg mt-5 p-3 pl-6 mb-5'>
                    <div className='flex justify-between'>
                        <h5 className='text-lg font-bold mb-8'>Question Analysis</h5>
                        <span className='font-bold text-blue-400'>10/15</span>
                    </div>
                    <p className='text-base text-gray-600 font-medium'>
                        <span className='font-bold'>You scored 10 question correct out of 15.</span > However it still needs some improvements.
                    </p>

                    <Circlechart />
                </div>
            </div>

        </div>
    )
}
