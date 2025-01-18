'use client';

import { useEffect } from 'react';
import { SwaggerUIBundle } from 'swagger-ui-dist';
import 'swagger-ui-dist/swagger-ui.css';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec: object;
};

const Swagger = ({ spec }: Props) => {
  useEffect(() => {
    SwaggerUIBundle({
      spec,
      dom_id: '#swagger-ui',
    });
  }, []);

  return <div id="swagger-ui"></div>;
};

export default Swagger;
