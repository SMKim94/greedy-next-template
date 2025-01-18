import { getApiDocs } from '@/lib/swagger';
import Swagger from './swagger';

const Page = async () => {
  const spec = await getApiDocs();
  return (
    <section>
      <Swagger spec={spec} />
    </section>
  );
};

export default Page;
