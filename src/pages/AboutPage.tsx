import { Helmet } from 'react-helmet';
import About from 'components/About';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;
