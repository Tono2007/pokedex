import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@components/Navbar';
import PageTransition from '@components/PageTransition';
import PropTypes from 'prop-types';
import Footer from '@components/Footer';
import GenerateHeadPageSEO from '../../helpers/seoPerPage';

function PageLayout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <header>
        <Navbar location={router.pathname} />
      </header>
      <main className="flex-auto mt-14 overflow-hidden">
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
