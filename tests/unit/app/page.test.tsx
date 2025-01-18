import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('메인 페이지', () => {
  test('메인 페이지에 제목이 표시되어야 합니다', () => {
    render(<Page />);
    const title = screen.getByText('Hello, World!');
    expect(title).toBeInTheDocument();
  });
});

describe('Page 컴포넌트', () => {
  it('Page 컴포넌트가 스냅샷과 일치해야 합니다', () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
