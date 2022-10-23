import Head from 'next/head';
import PropTypes from 'prop-types';

function GenerateHeadPageSEO({ title, descriptionPage, children }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={descriptionPage} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {children}
    </Head>
  );
}

GenerateHeadPageSEO.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionPage: PropTypes.string.isRequired,
};

export default GenerateHeadPageSEO;
