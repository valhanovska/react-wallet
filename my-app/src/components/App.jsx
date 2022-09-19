import { Component } from "react";
import Container from "./Container/Container";
import MainPage from "./MainPage/MainPage";
import TransactionHistoryPage from "./TransactionHistoryPage/TransactionHistoryPage";

class App extends Component {
  state = {
    activePage: "main",
    deduction: [],
    income: [],
  };

  componentDidMount() {
    const income = JSON.parse(localStorage.getItem("income"));
    const deduction = JSON.parse(localStorage.getItem("deduction"));

    this.setState({
      deduction,
      income,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deduction !== this.state.deduction) {
      localStorage.setItem("deduction", JSON.stringify(this.state.deduction));
    }

    if (prevState.income !== this.state.income) {
      localStorage.setItem("income", JSON.stringify(this.state.income));
    }
  }

  changePageHandler = (page = "main") => {
    this.setState({ activePage: page });
  };

  addTransaction = (transaction) => {
    const { transactionType } = transaction;
    this.setState((prev) => {
      return { [transactionType]: [...prev[transactionType], transaction] };
    });
  };

  render() {
    const { deduction, income, activePage } = this.state;
    return (
      <Container>
        {this.state.activePage === "main" ? (
          <MainPage
            changePageHandler={this.changePageHandler}
            addTransaction={this.addTransaction}
          />
        ) : (
          <TransactionHistoryPage
            transactionType={activePage}
            changePageHandler={this.changePageHandler}
            transactions={activePage === "deduction" ? deduction : income}
          />
        )}
      </Container>
    );
  }
}

export default App;
