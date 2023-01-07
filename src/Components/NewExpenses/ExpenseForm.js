import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const titleChangeHandler = (e) => {
    setenteredTitle(e.target.value);
  };
  //using single use state instead of multiple states (by sending object in useState)
  // const  [userInput,setUserInput]= useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });
  // const titleChangeHandler =(e)=>{
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredTitle: e.target.value
  //     // })
  //     //better way to get value from previous state as react schedules the useState
  //     setUserInput((previousState)=>{
  //         return { ...previousState,enteredTitle:e.target.value}
  //     });
  //     console.log(userInput.enteredTitle);
  // };

  const [enteredAmount, setenteredAmount] = useState(0);
  const amountChangeHandler = (e) => {
    setenteredAmount(e.target.value);
  };

  const [enteredDate, setenteredDate] = useState("");
  const dateChangeHandler = (e) => {
    setenteredDate(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    var newExpense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setenteredDate("");
    setenteredAmount("");
    setenteredTitle("");
    props.onNewExpenseCreated(newExpense);
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          className="alternative"
          type="button"
          onClick={() => {
            props.onCancel();
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
