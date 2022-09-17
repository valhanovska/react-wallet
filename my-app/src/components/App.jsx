import { Component } from "react";
import Container from "./Container/Container";
import MainPage from "./MainPage/MainPage";
import TransactionHistoryPage from "./TransactionHistoryPage/TransactionHistoryPage";

class App extends Component {
  state = {
    activePage: "main",
    transactions: [],
  };

  changePageHandler = (page = "main") => {
    this.setState({ activePage: page });
  };

  addTransaction = (transaction) => {
    this.setState((prev) => {
      return { transactions: [...prev.transactions, transaction] };
    });
  };

  render() {
    return (
      <Container>
        {this.state.activePage === "main" ? (
          <MainPage
            changePageHandler={this.changePageHandler}
            addTransaction={this.addTransaction}
          />
        ) : (
          <TransactionHistoryPage
            transactionType={this.state.activePage}
            changePageHandler={this.changePageHandler}
            transactions={this.state.transactions}
          />
        )}
      </Container>
    );
  }
}

export default App;
