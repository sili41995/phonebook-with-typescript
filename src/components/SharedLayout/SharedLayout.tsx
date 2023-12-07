import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import NavigationBar from 'components/NavigationBar';
import Loader from 'components/Loader';
// import { setAuthPageBackgroundColor, isContactsPage } from 'utils';

const SharedLayout = () => {
  // const { pathname } = useLocation();

  // setAuthPageBackgroundColor(pathname);

  return (
    <>
      <Header>
        <Container>
          <NavigationBar />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container
          // isContactsPage={isContactsPage(pathname)}
          >
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};
export default SharedLayout;
