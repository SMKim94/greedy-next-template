import MSWMockProvider from './_components/MSWMockProvider';
import './globals.css';

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
