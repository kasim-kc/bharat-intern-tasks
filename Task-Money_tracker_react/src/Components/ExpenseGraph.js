import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeGraph(props) {
  const [mydataset, setmyDataset] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(233, 116, 81, 0.5)",
          "rgba(210, 43, 43, 0.5)",
          "rgba(248, 131, 121, 0.5)",
          "rgba(250, 160, 160, 0.5)",
          "rgba(227, 115, 94, 0.5)",
        ],
        borderColor: [
          "rgba(233, 116, 81, 1)",
          "rgba(210, 43, 43, 1)",
          "rgba(248, 131, 121, 1)",
          "rgba(250, 160, 160, 1)",
          "rgba(227, 115, 94, 1)",
        ],
        borderWidth: 1.5,
        hoverBorderColor: "#f5f6fa",
      },
    ],
    labels: [],
  });

  useEffect(() => {
    var amountArr = [];
    var labelArr = [];

    props.data.forEach((item) => {
      if (item.type === "Expense") {
        if (labelArr.includes(item.cat)) {
          var i = labelArr.indexOf(item.cat)
          var amount = parseInt(amountArr[i]) + parseInt(item.amount)
          amountArr[i] = amount
          console.log(typeof amount);
          return
        }
        amountArr.push(item.amount);
        labelArr.push(item.cat);
      }
    });

    setmyDataset({
      datasets: [
        {
          data: amountArr,
          backgroundColor: [
            "rgba(233, 116, 81, 0.5)",
            "rgba(210, 43, 43, 0.5)",
            "rgba(248, 131, 121, 0.5)",
            "rgba(250, 160, 160, 0.5)",
            "rgba(227, 115, 94, 0.5)",
          ],
          borderColor: [
            "rgba(233, 116, 81, 1)",
            "rgba(210, 43, 43, 1)",
            "rgba(248, 131, 121, 1)",
            "rgba(250, 160, 160, 1)",
            "rgba(227, 115, 94, 1)",
          ],
          borderWidth: 1.5,
          hoverBorderColor: "#f5f6fa",
        },
      ],
      labels: labelArr,
    });
  }, [props.data]);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Expense Chart</h5>
        <p className="card-text text-success" style={{ fontWeight: "bold" }}>
          <Doughnut data={mydataset} style={{ width: "auto" }} />
        </p>
      </div>
    </div>
  );
}

export default IncomeGraph;
