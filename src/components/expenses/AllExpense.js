import ExpenseItem from "./ExpenseItem";
import "./AllExpense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const AllExpense = (props) => {
  const [stateFrom, setState] = useState("2020");

  const onChangeHandler = (state) => {
    setState(state);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={stateFrom} onChange={onChangeHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default AllExpense;
