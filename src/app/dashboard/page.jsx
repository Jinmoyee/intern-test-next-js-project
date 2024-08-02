import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

export default function Dashboard() {
    return (
        <div className='flex'>
            <Sidebar />
            <h1 className='border-l h-screen'>Dashboard</h1>
        </div>
    )
}
