import { HeaderStyled, Button } from "./Header.Styled";
import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";

const Header = ({ title, changePageHandler }) => {
  return (
    <HeaderStyled>
      {changePageHandler ? (
        <Button
          onClick={() => {
            changePageHandler("main");
          }}
        >
          <svg>
            <use href={sprite + "#icon-arrow-left2"}></use>
          </svg>
        </Button>
      ) : null}
      <h1>{title}</h1>
    </HeaderStyled>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnContent: PropTypes.string.isRequired,
};

export default Header;
