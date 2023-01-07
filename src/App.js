import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
function App() {
 
  const dummyExpenses = [
    {
      id: "e1",
      title: "Netflix Subscription",
      amount: 599,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 42999,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 3000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 2000,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setExpenses]=useState(dummyExpenses);

  const newExpenseHandler = (expense)=>{
    const newExpense = {...expense,id: Math.random()};
    setExpenses(prevExpense=> {
      return [newExpense,...prevExpense];
    })
    
  };
  return (
    <div>
      <NewExpense onNewExpenseCreated={newExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
