import Head from 'next/head';
import Navbar from '@components/Navbar';
import PropTypes from 'prop-types';
import GenerateHeadPageSEO from '../../helpers/seoPerPage';
import Footer from '@components/Footer';

function PageLayout(props) {
  const { children } = props;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex-auto mt-14">{children}</main>

      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
