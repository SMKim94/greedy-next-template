import Link from 'next/link';

const Page = async () => {
  return (
    <main>
      <h1>React Query Test</h1>
      <ul>
        <li>
          <Link href="/test/react-query/client-component">
            React query in client component
          </Link>
        </li>
        <li>
          <Link href="/test/react-query/server-component">
            React query in server component
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
