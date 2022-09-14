const TransactionHistoryPage = ({ changePageHandler, transactionType }) => {
  return (
    <>
      <h1>TransactionHistoryPage {transactionType}</h1>
      <button
        type="button"
        onClick={() => {
          changePageHandler("main");
        }}
      >
        Back to main
      </button>
    </>
  );
};

export default TransactionHistoryPage;
