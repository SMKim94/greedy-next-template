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
      components: {},
      security: [],
    },
  });

  return spec;
};
