import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.1.1',
      info: {
        title: 'Next.js Swagger API Example',
        version: '1.0.0',
      },
      components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: '사용자 고유 번호',
              },
              name: {
                type: 'string',
                description: '사용자 이름',
              },
              email: {
                type: 'string',
                nullable: true,
                description: '(옵션) 사용자 이메일',
                format: 'email',
              },
              emailVerified: {
                type: 'string',
                nullable: true,
                description: '(옵션) 이메일 인증 시각',
                format: 'date-time',
              },
              image: {
                type: 'string',
                nullable: true,
                description: '(옵션) 사용자 프로필 이미지 경로',
                format: 'url',
              },
            },
            required: ['id', 'name'],
          },
        },
      },
      security: [],
    },
  });

  return spec;
};
