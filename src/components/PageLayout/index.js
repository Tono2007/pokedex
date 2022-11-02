import { useRouter } from 'next/router';

import Navbar from '@components/Navbar';
import PageTransition from '@components/PageTransition';
import Footer from '@components/Footer';

import PropTypes from 'prop-types';

function PageLayout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar location={router.pathname} />
      </header>
      <main className="flex-auto mt-14">
        <PageTransition location={router.pathname}>{children}</PageTransition>
      </main>
      {/*  <main className="flex-auto mt-14">{children}</main> */}

      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
