import AddTransaction from "./AddTransaction";

function TransactionCard(props) {
  var pass = function (item){
    props.save(item)
  }
  return (
    <div className="card text-center mt-4" style={{ width: "auto" }}>
      <div className="card-body">
        <h5 className="card-title">Add Transaction</h5>
        <p className="card-text text-success" style={{ fontWeight: "bold" }}>
            <AddTransaction set = {pass}/>
        </p>
      </div>
    </div>
  );
}

export default TransactionCard;
