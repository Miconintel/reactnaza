import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

  // to receive data from the child u pass in a function and make the function return a data when called ehich u now pass in to the paren of new expense
  // this is a  vice versa of passing data from parent to child
  /*so to pass data from child to parent, u pass in a function as a prop expecting a data as an argument so when the child sees it,
   instead of using it as a data to itself, it calls the function and passes down the data as an argument to the parenr
   to use it for what it wants*/ 
  //  a componet is called first before the data is assigned 

const onSaveDataHandler = (enteredExpenseData)=>{
  const expenseData = {
    ...enteredExpenseData,
    id:Math.random().toString()
  }

props.onAddExpense(expenseData)
console.log(`${JSON.stringify(expenseData)} from child`)
}

  return (
    <div className="new-expense">
     <ExpenseForm onSaveData={onSaveDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
