import { CiFileOn } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className='mt-[5%] mr-4'>
            <Link href={'dashboard'}>
                <div className='flex items-center text-xl font-semibold text-gray-600 gap-3 px-12 py-5 rounded-r-full cursor-pointer hover:bg-gray-100'>
                    <MdAutoGraph size={30} />
                    <h3>Dashboard</h3>
                </div>
            </Link>
            <Link href={'skills'}>
                <div className='flex items-center text-xl font-semibold text-gray-600 gap-3 px-12 py-5 rounded-r-full cursor-pointer hover:bg-gray-100 '>
                    <FaRegStarHalfStroke size={30} />
                    <h3>Skill Test</h3>
                </div>
            </Link>
            <Link href={'internships'}>
                <div className='flex items-center text-xl font-semibold text-gray-600 gap-3 px-12 py-5 rounded-r-full cursor-pointer hover:bg-gray-100'>
                    <CiFileOn size={30} />
                    <h3>Internship</h3>
                </div>
            </Link>
        </div>
    )
}
