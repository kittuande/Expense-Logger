import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <div className="expenses-list__fallback">No Expenses Found!</div>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.amount}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
