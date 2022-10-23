import Head from 'next/head';
import Navbar from '@components/Navbar';
import PropTypes from 'prop-types';
import GenerateHeadPageSEO from '../../helpers/seoPerPage';

function PageLayout(props) {
  const { children } = props;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
