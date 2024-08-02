import Image from "next/image"
import user from '../../../public/assets/user.png'

export default function Navbar() {
    return (
        <div className='flex justify-between border-b p-5'>
            <div className='logo'>
                <h1 className='text-black font-bold text-3xl mt-2'>WhatBytes</h1>
            </div>
            <div className='flex items-center border-2 rounded-lg p-2 gap-2 cursor-pointer'>
                <Image src={user} alt='User Avatar' width={30} height={30} className='rounded-full bg-red-500 p-1' />
                <p className='text-black font-bold'>User Name</p>
            </div>
        </div>
    )
}
