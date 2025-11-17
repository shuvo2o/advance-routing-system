import Link from 'next/link'
import React from 'react'

const GalleryPage = () => {
  return (
    <div>
      This is Gallery Page
      <Link className='mt-5 border rounded-3xl p-2 ' href="/image/123">Go to Image 123</Link>
    </div>
  )
}

export default GalleryPage
