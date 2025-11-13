import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
 <header>
    <nav className='flex gap-4 p-4 bg-gray-800 text-white mb-4'>
        <Link href="/">Home</Link> |{' '}
        <Link href="/dashboard">Dashboard</Link> |{' '}
        <Link href="/dashboard/overview">Overview</Link> |{' '}
        <Link href="/dashboard/report">Report</Link> |{' '}
        <Link href="/dashboard/settings">Settings</Link>
    </nav>
 </header>
  )
}

export default Navbar
