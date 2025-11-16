import React from "react";

const FeedDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>Feed Details: {id}</div>;
};

export default FeedDetails;
