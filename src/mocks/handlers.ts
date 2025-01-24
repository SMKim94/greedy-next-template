import { http, delay, HttpResponse } from 'msw';
import type { HttpHandler } from 'msw';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const handlers: Array<HttpHandler> = [
  http.all('*', async () => {
    await delay(10);
  }),
  http.get(`${baseUrl}/api/welcome`, async () => {
    return HttpResponse.json({
      message: '환영합니다! 방문해 주셔서 감사합니다.',
    });
  }),
];

export default handlers;
