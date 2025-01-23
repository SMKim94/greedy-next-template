'use client';

import { useEffect } from 'react';
import { SwaggerUIBundle } from 'swagger-ui-dist';
import type { Spec } from 'swagger-ui-dist';
import 'swagger-ui-dist/swagger-ui.css';

type Props = {
  spec: Spec;
};

const Swagger = ({ spec }: Props) => {
  useEffect(() => {
    SwaggerUIBundle({
      spec,
      dom_id: '#swagger-ui',
    });
  }, [spec]);

  return <div id="swagger-ui"></div>;
};

export default Swagger;
