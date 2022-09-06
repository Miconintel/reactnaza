import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  // the uses state function returns 2 items
  // 1) the variable that u want to change later which used to call the function usestate  is stored in the first return item that is title
  // 2) a call back function that will be executed to change the variable
  // finally call the settitle function using  on the handlerthe new value u want to set
  // understanding basic javascript
  // so the state function basically returns the value u want to change and store it in a special variable like in window .storage. that varianle is now what u use on your jsx, the second return value is now waiting to be called by the handler function, as soon as that happens, the state variable changes and all the elements wher it is referenced changes too
  // the specific instance or componenbt function is also ecexuted again when this handler function is called to reload the component again.
  // see the console.log, coming up each time you clic
  /* the usestate considers the state initialisation just once when the components is loaded for first time
so when the componet is loaded again, state is not reinitialised, but just takes the value of state and puts it up.
meaning it uses the vlue of state. hence the name usestates
just like my state in vanilla, it is not reinitialized, because it is like n object, only the value keep geting updated, but then, if u wnt to hold it like in window.storage, u will have to save it on window .storage and bring t back, notice that whe you reload the page, it starts all the new value afresh*/

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
export default ExpenseItem;
