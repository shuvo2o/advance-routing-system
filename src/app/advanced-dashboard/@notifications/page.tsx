import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <div>
      <h3 className='text-lg font-semibold'>Notifications!!</h3>
      <Link href="/advanced-dashboard/alerts">Go to Alert</Link>
    </div>
  )
}

export default Notification
