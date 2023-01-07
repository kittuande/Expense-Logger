import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";
function ExpenseItem(props) {
  const title = props.title;
  // const [title,setTitle]=useState(props.title);
  // const clickHandler =()=>{
  //   setTitle("Updated!!!");
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs.{props.price}</div>
        {/* <button onClick={clickHandler}>Update</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
