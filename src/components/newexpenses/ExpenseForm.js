import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //  THIS EXAMPLE ID FOR OBJECT STATES

  // const [formStates, setForms] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  // const titleHandler = (e) => {
  //   setForms((formStates) => {
  //     return {
  //       ...formStates,
  //       title: e.target.value,
  //     };
  //   });
  //   console.log(e.target.value);
  // };
  // const amountHandler = (e) => {
  //   setForms({
  //     ...formStates,
  //     amount: e.target.value,
  //   });
  //   console.log(e.target.value);
  // };
  // const dateHandler = (e) => {
  //   setForms({
  //     ...formStates,
  //     date: e.target.value,
  //   });
  //   console.log(e.target.value);
  // };

  // VERY IMPROTANT!! you can write out same propeties in one object, but the last propety will be the one taking and the object wont show 2 properties with 2 values
  /* for this reason we will be saving an object i the state variable and when we want to reassign the object individual values, we 
use a spread operator to spread the old object and now reaasign a new value to the particular properties we want to change and like I said it will 
end up being an object holding the old properties, but one property reasssigned which will overwite te one copied from old object since 2 propwerties can 
appear in one object*/

  /* note that state scheduler is asynchronous in nature is not updated until a component it is rendered on the screen, so if u happen to schedule 2 states in a function and you require the 
  to use the updated state of one of the scheduled state u will be faced with an error because the updated state will not be updated by react until 
  the componet isloaded on the screen, so the value of the actual state in the handler function still remains the same. see example below */

  //   const [state, setState] = useState(0);
  //   console.log(`${state} on load`);
  //   const titleHandler = (e) => {

  //     setState(state + 1);
  //     setState(state + 1);
  //     console.log(`${state} after`);
  //   };
  //   const amountHandler = (e) => {
  //     console.log(state);
  //   };
  //   const dateHandler = (e) => {
  //     console.log(state);
  //   };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(e.target.value, enteredTitle);
  };
  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(e.target.value, enteredAmount);
  };
  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(e.target.value, enteredDate);
  };

  const submitHAndler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(expenseData);
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredTitle("");

    // console.log(expenseData)
  };

  return (
    <form onSubmit={submitHAndler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
