'use client';

import React, { useEffect, useState } from 'react';

const MSWClientTestComponent = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/welcome`,
        );
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Failed to load message');
      }
    };

    fetchData();
  }, []);

  if (!message) {
    return <div>Loading...</div>;
  }

  return <div>{message}</div>;
};

export default MSWClientTestComponent;
