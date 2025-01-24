import Link from 'next/link';

const Page = () => {
  return (
    <main>
      <h1>MSW Test</h1>
      <ul>
        <li>
          <Link href="/test/msw/client-component">MSW in client component</Link>
        </li>
        <li>
          <Link href="/test/msw/server-component">MSW in server component</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
