import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/example:
 *   get:
 *     tags:
 *       - 예제 API
 *     summary: 예제 API
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 */
export const GET = async () => {
  return NextResponse.json({ message: 'Hello, World!' });
};
