import NotFound from 'components/NotFound';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <NotFound />
  </>
);

export default NotFoundPage;
