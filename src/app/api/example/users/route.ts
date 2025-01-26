import { NextResponse } from 'next/server';
import { users } from '@/app/api/example/sample-datas';

/**
 * @swagger
 * /api/example/users:
 *   get:
 *     tags:
 *       - 사용자 목록 예시
 *     summary: 사용자 목록
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
export const GET = async () => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  console.log('Request received. Starting delay...');

  // 딜레이 도중 로그 찍기
  await delay(1000);
  console.log('1 second passed...');

  await delay(1000);
  console.log('2 seconds passed...');

  await delay(1000);
  console.log('3 seconds passed.\nResponding now.');

  return NextResponse.json([...users]);
};
