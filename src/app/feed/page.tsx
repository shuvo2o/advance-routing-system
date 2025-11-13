import React from 'react'

const Feedpage = async() => {
  return (
    await new Promise(resolve => setTimeout(resolve, 1000)),
    <div>
     News Feed Page
    </div>
  )
}

export default Feedpage
