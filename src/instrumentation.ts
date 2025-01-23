export const register = async () => {
  if (process.env.NODE_ENV === 'production') return;
  console.log('[instrumentation] NEXT_RUNTIME: ', process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { server } = await import('@/mocks/node');
    server.listen();
  }
};
