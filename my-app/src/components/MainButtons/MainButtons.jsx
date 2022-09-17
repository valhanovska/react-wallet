import { Wrapper, Button } from "./MainButtons.Styled";

const MainButtons = ({ changePageHandler }) => (
  <Wrapper>
    <Button
      type="button"
      onClick={() => {
        changePageHandler("deduction");
      }}
    >
      Deduction
    </Button>
    <Button
      type="button"
      onClick={() => {
        changePageHandler("income");
      }}
    >
      Income
    </Button>
  </Wrapper>
);
export default MainButtons;
