import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const newExpenseHandler = (newExpense) => {
    props.onNewExpenseCreated(newExpense);
    setIsFormEnabled(false);
  };
  let [isFormEnabled, setIsFormEnabled] = useState(false);
  return (
    <div className="new-expense">
      {!isFormEnabled && (
        <div>
          <button type="button" onClick={() => setIsFormEnabled(true)}>
            Add an Expense
          </button>
        </div>
      )}
      {isFormEnabled && (
        <ExpenseForm
          onCancel={() => setIsFormEnabled(false)}
          onNewExpenseCreated={newExpenseHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
