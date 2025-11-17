import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const ImageDetails = async ({ params }: Props) => {
  const { id } = await params; 

  return (
    <div>
      Image Details Page: {id}
    </div>
  );
};

export default ImageDetails;
