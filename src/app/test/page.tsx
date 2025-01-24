import Link from 'next/link';

const Page = () => {
  return (
    <main>
      <h1>Test</h1>
      <ul>
        <li>
          <Link href="/test/msw">MSW Test</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
