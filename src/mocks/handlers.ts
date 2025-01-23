import { http, delay, HttpResponse } from 'msw';
import type { HttpHandler } from 'msw';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const handlers: Array<HttpHandler> = [
  http.all('*', async () => {
    await delay(10);
  }),
  http.get(`${baseUrl}/api/welcome`, async () => {
    return HttpResponse.json([
      '환영합니다! 방문해 주셔서 감사합니다.',
      '어서 오세요! 당신을 기다리고 있었습니다.',
      '환영합니다! 만나서 반갑습니다.',
      '여기 오신 것을 진심으로 환영합니다.',
      '방문을 환영합니다! 즐거운 시간 되세요.',
      '오신 걸 환영합니다! 편안히 둘러보세요.',
      '어서 오세요! 좋은 하루 되세요.',
      '환영합니다! 특별한 시간을 함께 나누길 바랍니다.',
      '저희와 함께 해주셔서 감사합니다. 환영합니다!',
      '온 마음으로 환영합니다! 즐거운 시간이 되길 바랍니다.',
    ]);
  }),
];

export default handlers;
