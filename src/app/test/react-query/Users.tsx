'use client';

import { AdapterUser } from '@/app/api/example/sample-datas';
import { useQuery } from '@tanstack/react-query';

const Users = () => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/example/users`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      return response.json();
    },
  });

  return (
    <table>
      <thead>
        <tr>
          <th style={{ border: '1px solid black' }}>Id</th>
          <th style={{ border: '1px solid black' }}>Name</th>
          <th style={{ border: '1px solid black' }}>Email</th>
          <th style={{ border: '1px solid black' }}>Email Verified</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ id, name, email, emailVerified }: AdapterUser) => (
            <tr key={`${id}-${name}`}>
              <td style={{ border: '1px solid black' }}>{id}</td>
              <td style={{ border: '1px solid black' }}>{name}</td>
              <td style={{ border: '1px solid black' }}>{email}</td>
              <td style={{ border: '1px solid black' }}>
                {emailVerified?.toString()}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Users;
