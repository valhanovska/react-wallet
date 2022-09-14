const TransactionForm = () => {
  return (
    <>
      <form action="">
        <label>
          <p>Date</p>
          <input type="date" />
        </label>
        <label>
          <p>Time</p>
          <input type="time" />
        </label>
        <label>
          <p>Category</p>
          <input type="button" value={"food"} />
        </label>
        <label>
          <p>Sum</p>
          <input type="button" placeholder="input sum" />
        </label>
        <label>
          <p>Currency</p>
          <input type="button" value={"UAH"} />
        </label>
        <label>
          <input type="text" placeholder="Comment" />
        </label>
      </form>
    </>
  );
};

export default TransactionForm;
