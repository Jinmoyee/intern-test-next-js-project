import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <h1 className='border-l h-screen'>Home</h1>
    </div>
  )
}
