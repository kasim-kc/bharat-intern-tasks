import { useEffect, useState } from "react";

function Expense(props) {
  const [col, setCol] = useState("");

  const [amount, setAmount] = useState("")

  useEffect(() => {
    var sum = 0;
    props.data.forEach(item => {
      if (item.type == "Expense") {
        sum += parseInt(item.amount)
      }
    });
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
            Expense
          </p>
          <h5 className="card-title text-danger">$ {amount}</h5>
        </div>
      </div>
    </div>
  );
}

export default Expense;
