import PropTypes from 'prop-types';

function PageHeader({ title, subtitle }) {
  return (
    <header className="my-14">
      <h1 className="text-5xl font-bold mb-3">{title}</h1>
      <h2 className="text-base text-textSecondary">{subtitle}</h2>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PageHeader;
