import incImg from "./income.png"
import expImg from "./expense.png"
import remImg from "./remove.png"


function TransactionTable(props) {
  const remove = (index) => {
    props.remove(index)
  }
  return (
    <div style={{ overflow: "auto", height: "250px" }}>
      <table className="table table-hover text-center">
        <thead className="table-dark sticky-top">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Type</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Del</th>
          </tr>
        </thead>
        <tbody>
          {[...props.data].reverse().map((i) => {
            return <tr>
              <th scope="row">{i.type == "Income" ? <img src={incImg} /> : <img src={expImg} />}</th>
              <td>{i.cat}</td>
              <td>{i.date}</td>
              <td>{i.amount}</td>
              <td><img src={remImg} onClick={() => remove(i.id)} style={{cursor: "pointer"}}/></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
