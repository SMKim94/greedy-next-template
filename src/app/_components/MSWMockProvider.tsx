'use client';

import handlers from '@/mocks/handlers';
import { Suspense, use } from 'react';

const mockingEnablePromise =
  typeof window !== 'undefined'
    ? import('@/mocks/browser').then(async ({ default: worker }) => {
        if (process.env.NODE_ENV === 'production') return;

        await worker.start({
          onUnhandledRequest: (request, print) => {
            if (request.url.includes('_next')) return;
            print.warning();
          },
        });
        worker.use(...handlers);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (module as any).hot?.dispose(() => {
          worker.stop();
        });
        console.log(worker.listHandlers());
      })
    : Promise.resolve();

const MSWMockProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  use(mockingEnablePromise);
  return children;
};

export const MSWMockProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense fallback={null}>
      <MSWMockProviderWrapper>{children}</MSWMockProviderWrapper>
    </Suspense>
  );
};

export default MSWMockProvider;
