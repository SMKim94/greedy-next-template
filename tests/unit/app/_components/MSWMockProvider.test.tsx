import { render, screen, waitFor } from '@testing-library/react';
import MSWMockProvider from '@/app/_components/MSWMockProvider';
import MSWClientTestComponent from './MSWClientTestComponent';
import { server } from '@/mocks/node';

describe('MSWMockProvider and API Integration', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should display welcome message from the API', async () => {
    render(
      <MSWMockProvider>
        <MSWClientTestComponent />
      </MSWMockProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('환영합니다! 방문해 주셔서 감사합니다.'));
    });
  });
});
