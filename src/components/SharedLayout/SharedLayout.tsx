import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import NavigationBar from 'components/NavigationBar';
import Loader from 'components/Loader';
import { getIsContactsPage, setAuthPageBackgroundColor } from 'utils';

const SharedLayout = () => {
  const { pathname } = useLocation();
  const isContactsPage = getIsContactsPage(pathname);

  setAuthPageBackgroundColor(pathname);

  return (
    <>
      <Header>
        <Container>
          <NavigationBar />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container isContactsPage={isContactsPage}>
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
