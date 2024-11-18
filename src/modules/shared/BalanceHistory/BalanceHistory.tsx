import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BalanceHistory = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: [200, 300, 450, 700, 250, 400, 600], // Dummy balance data
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Light blue fill
        borderColor: "rgba(54, 162, 235, 1)", // Dark blue line
        borderWidth: 2,
        tension: 0.4, // Curve effect
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for this chart
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 800, // Adjust max according to data
        ticks: {
          stepSize: 200,
          color: "#888", // Color of Y-axis labels
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Grid color
        },
      },
      x: {
        ticks: {
          color: "#888", // Color of X-axis labels
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Grid color
        },
      },
    },
  };

  return (
    <div>
      <h3 className="font-semibold text-[22px] text-[#343C6A] mb-4">
        Balance History
      </h3>
      <div className="bg-white p-4 rounded-xl h-[240px] flex justify-center">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;
