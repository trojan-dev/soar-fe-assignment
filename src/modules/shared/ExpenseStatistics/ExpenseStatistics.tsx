import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components for the Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatistics = () => {
  // Define the data for the pie chart
  const data = {
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3], // Dummy data
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Define options for customizing the pie chart
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <h3 className="font-semibold text-[22px] text-[#343C6A] mb-4">
        Expense Statistics
      </h3>
      <div className="bg-white rounded-xl p-4 h-[300px] flex justify-center">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
