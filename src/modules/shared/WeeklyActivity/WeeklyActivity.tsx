import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklyActivity() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Activity",
        data: [30, 50, 80, 40, 70, 60], // Dummy data
        backgroundColor: "#396AFF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div>
      <h3 className="font-semibold text-[22px] text-[#343C6A] mb-4">
        Weekly Activity
      </h3>
      <div className="bg-white rounded-xl p-4 h-[300px] flex justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
