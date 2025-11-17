'use client';
import React from 'react';
import { useRouter } from 'next/router';

const Modal = ({ id }: { id: string }) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl">Image ID: {id}</h2>
        <button
          onClick={() => router.back()} // ✅ call the function
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
