import { http, delay, HttpResponse } from 'msw';
import type { HttpHandler } from 'msw';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const handlers: Array<HttpHandler> = [
  http.all('*', async () => {
    await delay(10);
  }),
  http.get(`${baseUrl}/api/welcome`, async () => {
    return HttpResponse.json([
      '개천에서 용 난다.',
      '등잔 밑이 어둡다.',
      '가는 말이 고와야 오는 말이 곱다.',
      '구슬이 서 말이라도 꿰어야 보배다.',
      '길고 짧은 것은 대봐야 안다.',
      '배보다 배꼽이 크다.',
      '가는 날이 장날이다.',
      '백지장도 맞들면 낫다.',
      '돌다리도 두들겨 보고 건너라.',
      '호랑이도 제 말 하면 온다.',
    ]);
  }),
];

export default handlers;
