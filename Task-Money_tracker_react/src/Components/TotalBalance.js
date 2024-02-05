import { useEffect, useState } from "react";

function TotalBalance(props) {
  const [col, setCol] = useState("");
  const [amount, setAmount] = useState("")

  useEffect(() => {
    var sum = 0;
    var IncomeSum = 0;
    var ExpenseSum = 0;

    props.data.forEach(item => {
      if (item.type == "Income") {
        IncomeSum += parseInt(item.amount) 
      }
    });

    props.data.forEach(item => {
      if (item.type == "Expense") {
        ExpenseSum += parseInt(item.amount) 
      }
    });

    sum = IncomeSum - ExpenseSum;
    setAmount(sum)
  }, [props.data])

  return (
    <div onMouseEnter={() => setCol("#F1F1F1")} onMouseLeave={() => setCol("")}>
      <div
        className="card text-center"
        style={{ width: "auto", backgroundColor: `${col}` }}
      >
        <div className="card-body">
          <p className="card-text" style={{ fontWeight: "bold" }}>
            Balance
          </p>
          <h5 className="card-title text-primary">$ {amount}</h5>
        </div>
      </div>
    </div>
  );
}

export default TotalBalance;
