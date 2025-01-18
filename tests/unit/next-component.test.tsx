import { render, screen } from '@testing-library/react';
import Link from 'next/link';

describe('Link 컴포넌트', () => {
  test('Link 컴포넌트가 올바르게 렌더링되어야 합니다', () => {
    render(<Link href="/">홈</Link>);
    const link = screen.getByRole('link', { name: '홈' });
    expect(link).toBeInTheDocument();
  });

  test('href 속성이 올바르게 설정되어야 합니다', () => {
    render(<Link href="/">홈</Link>);
    const link = screen.getByRole('link', { name: '홈' });
    expect(link).toHaveAttribute('href', '/');
  });
});
