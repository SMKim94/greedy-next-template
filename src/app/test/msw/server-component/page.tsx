'use server';

import { notFound } from 'next/navigation';

const MSWServerComponent = async () => {
  const apiUrl = new URL('/api/welcome', process.env.NEXT_PUBLIC_BASE_URL);
  const response = await fetch(apiUrl);
  if (!response.ok) {
    notFound();
  }
  const data = await response.json();

  if (data?.message) {
    return <div>{data.message}</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default MSWServerComponent;
