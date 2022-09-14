import { Component } from "react";
import MainPage from "./MainPage/MainPage";
import TransactionHistoryPage from "./TransactionHistoryPage/TransactionHistoryPage";

class App extends Component {
  state = {
    activePage: "main",
  };

  changePageHandler = (page) => {
    this.setState({ activePage: page });
  };

  render() {
    return (
      <div className="App">
        {this.state.activePage === "main" ? (
          <MainPage changePageHandler={this.changePageHandler} />
        ) : (
          <TransactionHistoryPage
            transactionType={this.state.activePage}
            changePageHandler={this.changePageHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
