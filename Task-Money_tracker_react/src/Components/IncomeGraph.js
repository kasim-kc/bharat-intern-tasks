import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeGraph(props) {
  const [mydataset, setmyDataset] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(11, 218, 81, 0.5)",
          "rgba(34, 139, 34, 0.5)",
          "rgba(152, 251, 152, 0.5)",
          "rgba(76, 187, 23, 0.5)",
          "rgba(50, 205, 50, 0.5)",
        ],
        borderColor: [
          "rgba(11, 218, 81, 1)",
          "rgba(34, 139, 34, 1)",
          "rgba(152, 251, 152, 1)",
          "rgba(76, 187, 23, 1)",
          "rgba(50, 205, 50, 1)",
        ],
        borderWidth: 1.5,
        hoverBorderColor: "#f5f6fa"
      },
    ],
    labels: []
  });

  useEffect(() => {
    var amountArr = [];
    var labelArr = [];

    props.data.forEach(item => {
      if (item.type === "Income") {
        if (labelArr.includes(item.cat)) {
          var i = labelArr.indexOf(item.cat)
          var amount = parseInt(amountArr[i]) + parseInt(item.amount)
          amountArr[i] = amount
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
            "rgba(11, 218, 81, 0.5)",
            "rgba(34, 139, 34, 0.5)",
            "rgba(152, 251, 152, 0.5)",
            "rgba(76, 187, 23, 0.5)",
            "rgba(50, 205, 50, 0.5)",
            "rgba(0, 255, 127, 0.5)",
            "rgba(0, 158, 96, 0.5)",
            "rgb(46, 139, 87, 0.5)",
            "rgb(147, 197, 114, 0.5)"
          ],
          borderColor: [
            "rgba(11, 218, 81, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(152, 251, 152, 1)",
            "rgba(76, 187, 23, 1)",
            "rgba(50, 205, 50, 1)",
          ],
          borderWidth: 1.5,
          hoverBorderColor: "#f5f6fa"
        },
      ],
      labels: labelArr,
    })
  }, [props.data]);

  return (
    <div className="card text-center" >
      <div className="card-body">
        <h5 className="card-title">Income Chart</h5>
        <p className="card-text text-success" style={{ fontWeight: "bold" }}>
          <Doughnut data={mydataset} style={{ width: "auto"}}/>
        </p>
      </div>
    </div>
  );
}

export default IncomeGraph;
