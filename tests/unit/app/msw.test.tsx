import { setupServer } from 'msw/node';
import { http, delay, HttpResponse } from 'msw';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

// 서버 설정
const server = setupServer(
  http.all('*', async () => delay(10)),
  http.get(`${baseUrl}/api/welcome`, async () => {
    return HttpResponse.json({
      message: '환영합니다! 방문해 주셔서 감사합니다.',
    });
  }),
);

// MSW 서버 초기화
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MSW Test', () => {
  it('should get message', async () => {
    const response = await fetch(`${baseUrl}/api/welcome`);
    const data = await response.json();
    expect(data).toBeDefined();
    expect(data.message).toBeDefined();
    expect(data.message).toEqual('환영합니다! 방문해 주셔서 감사합니다.');
  });
});
