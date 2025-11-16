"use client";

import React, { useEffect } from 'react';

const ABC = () => {
  useEffect(() => {
    throw new Error("ABC component mounted");
  }, []);

  return (
    <div>
      <h1>ABC Component</h1>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <div>Error page</div>
      <ABC />
    </div>
  );
};

export default Page;
