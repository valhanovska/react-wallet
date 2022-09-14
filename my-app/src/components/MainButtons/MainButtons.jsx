const MainButtons = ({ changePageHandler }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          changePageHandler("income");
        }}
      >
        Income
      </button>
      <button
        type="button"
        onClick={() => {
          changePageHandler("expenses");
        }}
      >
        Expenses
      </button>
    </div>
  );
};

export default MainButtons;
