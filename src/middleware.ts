import { NextResponse } from 'next/server';

export const middleware = () => {
  return NextResponse.next();
};

/**
 * 미들웨어 설정입니다.
 */
export const config = {
  /**
   * matcher 배열에 있는 패턴 중 하나와 일치하는 URL로 요청이 들어올 경우에만 미들웨어를 실행합니다.
   */
  matcher: [
    /*
     * 다음 경로를 제외한 모든 요청 경로와 일치합니다:
     * - _next/static (정적 파일 경로)
     * - _next/image (이미지 최적화 파일 경로)
     * - favicon.ico, sitemap.xml, robots.txt (메타데이터 파일)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
