"use client";

import React, { useEffect } from 'react';

const ABC = () => {
    useEffect(() => {
        throw new Error("ABC component mounted");
    }, []);

    return (
        <div>
            <h1>ABC Page</h1>
        </div>
    );
}

export default ABC;
