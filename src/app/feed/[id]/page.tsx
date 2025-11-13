import React from 'react'
type Props = {
    params:Promise<{
        id: string;
    }>
}
const FeedDetails = async({params}) => {
    const {id} = await params;
  return (
    <div>
      Feed Details: {id}
    </div>
  )
}

export default FeedDetails
