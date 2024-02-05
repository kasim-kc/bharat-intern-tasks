import { useEffect, useState } from "react";

function Income(props) {
  const [col, setCol] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    var sum = 0;
    props.data.forEach((item) => {
      if (item.type == "Income") {
        sum += parseInt(item.amount);
      }
    });
    setAmount(sum);
  }, [props.data]);

  return (
    <div onMouseEnter={() => setCol("#F1F1F1")} onMouseLeave={() => setCol("")}>
      <div
        className="card text-center"
        style={{ width: "auto", backgroundColor: `${col}` }}
      >
        <div className="card-body bg-blue-500 text-white rounded-lg">
          <p className="card-text" style={{ fontWeight: "bold" }}>
            Income
          </p>
          <h5 className="card-title text-success text-white">$ {amount}</h5>
        </div>
      </div>
    </div>
  );
}

export default Income;
