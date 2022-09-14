import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import MainButtons from "../MainButtons/MainButtons";
import Categories from "../Categories";
import { categoriesList } from "../../data/categoriesList";

const MainPage = () => {
  return (
    <>
      <Header title="Журнал витрат" />
      <main>
        <TransactionForm />
        <MainButtons />
        <Categories categoriesList={categoriesList} />
      </main>
    </>
  );
};

export default MainPage;
