import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2022");
  const expenseFilterHandler = (props) => {
    setSelectedFilter(props);
  };
  const filterExpenses = (expense) => {
    return (
      expense.date.toLocaleString("en-US", { year: "numeric" }) ===
      selectedFilter
    );
  };
  const filteredExpenses = props.items.filter(filterExpenses);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterValue={selectedFilter}
          onExpenseFilterChange={expenseFilterHandler}
        />
        <ExpenseChart items={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
