import { getApiDocs } from '@/lib/swagger';
import ReactSwagger from './react-swagger';

const Page = async () => {
  const spec = await getApiDocs();
  return (
    <section>
      <ReactSwagger spec={spec} />
    </section>
  );
};

export default Page;
