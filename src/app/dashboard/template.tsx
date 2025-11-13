import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    console.log("template.tsx rendered...")
    return (
        <div className='space-y-4'>
            <h1>Dashboard Layout</h1>
            <div className='border p-4'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
