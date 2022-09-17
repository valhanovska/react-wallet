import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import MainButtons from "../MainButtons/MainButtons";
import Categories from "../Categories/Categories";
import { categoriesList } from "../../data/categoriesList";
import { Component } from "react";

class MainPage extends Component {
  state = {
    isCategories: false,
    date: "",
    time: "",
    category: "food",
    summary: "",
    currency: "UAH",
    comments: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  openCategoriesHandler = () => {
    this.setState({ isCategories: true });
  };
  closeCategoriesHandler = () => {
    this.setState({ isCategories: false });
  };

  setCategory = (category) => {
    this.setState({ category });
    this.closeCategoriesHandler();
  };

  render() {
    const { isCategories, ...dataForm } = this.state;
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header title="Wallet" />
            <main>
              <TransactionForm
                openCategoriesHandler={this.openCategoriesHandler}
                dataForm={dataForm}
                handleChange={this.handleChange}
                cbHandleSubmit={this.props.addTransaction}
              />
              <MainButtons changePageHandler={this.props.changePageHandler} />
            </main>
          </>
        ) : (
          <>
            <Header
              title="Categories"
              btnContent="Back"
              changePageHandler={this.closeCategoriesHandler}
            />
            <main>
              <Categories
                setCategory={this.setCategory}
                categoriesList={categoriesList}
              />
            </main>
          </>
        )}
      </>
    );
  }
}
export default MainPage;
