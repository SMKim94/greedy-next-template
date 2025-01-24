'use client';

import { useEffect, useState } from 'react';

const Page = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      const apiUrl = new URL('/api/welcome', process.env.NEXT_PUBLIC_BASE_URL);
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          setMessage(data.message);
        }
      } else {
        setMessage(response.statusText);
      }
    };

    fetchMessage();
  }, []);

  if (message) {
    return <div>{message}</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default Page;
