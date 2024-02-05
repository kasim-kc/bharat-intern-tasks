import { useState } from "react";

function AddTransaction(props) {
  const [selected, setSelected] = useState(false);

  const myFun = (e) => {
    e.preventDefault();

    var type = document.getElementById("type").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    var cat = document.getElementById("category").value;

    let uuid = crypto.randomUUID();

    var obj = {
      id: uuid,
      type: type,
      date: date,
      amount: amount,
      cat: cat,
    };

    props.set(obj);

    document.getElementById("type").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
  };

  const handleChangeSelectMenu = () => {
    var type = document.getElementById("type").value;
    if (type === "Income") {
      setSelected(false)
    } else {
      setSelected(true)
    }
  };
  return (
    <form onSubmit={myFun}>
      <div className="row">
        <div className="col">
          <select className="form-select" id="type" onChange={handleChangeSelectMenu} required>
            <option value="" selected disabled>Transaction Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className="col">
          <input type="date" className="form-control" id="date" required/>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col input-group">
          <span
            className="input-group-text"
            style={{ backgroundColor: "white" }}
          >
            $
          </span>
          <input
            type="text"
            className="form-control"
            id="amount"
            placeholder="Enter Amount"
            required
          />
        </div>
        <div className="col">
          {selected ? (
            <select className="form-select" id="category" required>
              <option disabled selected value="">
                Categories Type
              </option>
              <option value="Food">Food</option>
              <option value="Rent">Rent</option>
              <option value="Cloths">Cloths</option>
              <option value="Grocery">Grocery</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <select
              className="form-select"
              id="category"
              required
            >
              <option disabled selected value="">
                Categories Type
              </option>
              <option value="Salary">Salary</option>
              <option value="Business">Business</option>
              <option value="Investment">Investment</option>
              <option value="Gift">Gift</option>
              <option value="Savings">Savings</option>
              <option value="Deposits">Deposits</option>
              <option value="Lottery">Lottery</option>
              <option value="Rental Income">Rental Income</option>
              <option value="Other">Other</option>
            </select>
          )}
        </div>
      </div>
      <div className="mt-2">
        <button type="Submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddTransaction;
