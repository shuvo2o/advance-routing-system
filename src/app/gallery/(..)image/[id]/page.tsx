import React from 'react'

const ImageDetails = async ({ params }:{params: Promise<{ id: string }>}) => {
const { id } = await params
  return (
    <div>
      <h1>Image Details Page:{id}</h1>
    </div>
  )
}

export default ImageDetails
