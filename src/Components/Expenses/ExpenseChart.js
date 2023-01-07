import Chart from "../Charts/Chart";

const ExpenseChart = (props) => {
  let months = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  let totalAmount = 0;
  for (let i of props.items) {
    months[i.date.getMonth()].value += i.amount;
    totalAmount += i.amount;
    console.log(months[i.date.getMonth()]);
  }
  return <Chart months={months} totalAmount={totalAmount} />;
};
export default ExpenseChart;
