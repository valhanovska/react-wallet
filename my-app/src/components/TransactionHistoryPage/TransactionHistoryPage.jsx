import {
  List,
  Item,
  Button,
  MainWrapper,
  DateContainer,
  Summary,
  Currency,
} from "./TransactionHistoryPage.Styled";
import Header from "../Header";
import sprite from "../../assets/icons/sprite.svg";

const TransactionHistoryPage = ({
  changePageHandler,
  transactionType,
  transactions,
}) => {
  return (
    <>
      <Header
        title={transactionType === "deduction" ? "Deduction" : "Income"}
        changePageHandler={changePageHandler}
      />
      <List>
        {transactions.map(({ date, time, comment, summary, currency }) => {
          return (
            <Item>
              <MainWrapper>
                <div>
                  <DateContainer>
                    <span>{date}</span>
                    <span>{time}</span>
                  </DateContainer>
                  <p>{comment}</p>
                </div>
                <div>
                  <Summary>{summary}</Summary>
                  <Currency>{currency}</Currency>
                </div>
              </MainWrapper>

              <Button
              // onClick={() => {
              //   changePageHandler("main");
              // }}
              >
                <svg>
                  <use href={sprite + "icon-navigation-more"}></use>
                </svg>
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default TransactionHistoryPage;
