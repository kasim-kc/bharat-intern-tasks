import Expense from "./Components/Expense";
import Income from "./Components/Income";
import NavBar from "./Components/NavBar";
import TotalBalance from "./Components/TotalBalance";
import TransactionTable from "./Components/TransactionTable";
import IncomeGraph from "./Components/IncomeGraph";
import ExpenseGraph from "./Components/ExpenseGraph";
import TransactionCard from "./Components/AddTransactionCard";
import { useState } from "react";

function App() {
  var [transaction, setTransaction] = useState([]);

  var saveTransaction = function (item) {
    setTransaction([...transaction, item]);
    console.log([...transaction, item]);
  };

  var removeTrans = function (index) {
    console.log(index);
    setTransaction([...transaction.filter((e) => e.id !== index)]);
  };

  return (
    <div className="bg-blue-100">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
            <Income data={transaction} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
            <Expense data={transaction} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
            <TotalBalance data={transaction} />
          </div>
        </div>

        <div className="row flex">
          <div className="col-lg-4 mt-4">
            <TransactionTable data={transaction} remove={removeTrans} />
            <TransactionCard save={saveTransaction} />
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <IncomeGraph data={transaction} />
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <ExpenseGraph data={transaction} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
