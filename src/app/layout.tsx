import MSWMockProvider from './_components/MSWMockProvider';
import './globals.css';

if (
  process.env.NEXT_RUNTIME === 'nodejs' &&
  process.env.NODE_ENV !== 'production'
) {
  const { server } = await import('@/mocks/node');
  server.listen();
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <MSWMockProvider>{children}</MSWMockProvider>
      </body>
    </html>
  );
};

export default RootLayout;
