import PropTypes from "prop-types";

const Header = ({ title, btnContent }) => {
  return (
    <header>
      {btnContent && <button>{btnContent}</button>}
      <h1>{title}</h1>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnContent: PropTypes.string.isRequired,
};

export default Header;

// sfc
