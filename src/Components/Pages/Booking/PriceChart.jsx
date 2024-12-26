import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
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

const PriceChart = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://car-rental-system-server-five.vercel.app/allCars")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const generateColors = (length) => {
    return Array.from({ length }, () => {
      let r = Math.floor(Math.random() * 200);
      let g = Math.floor(Math.random() * 200);
      let b = Math.floor(Math.random() * 200);
      return `rgba(${r}, ${g}, ${b}, 0.6)`;
    });
  };

  const labels = data.map((item) => item.carName || "Unknown Model");
  const prices = data.map((item) => item.price);
  const colors = generateColors(data.length);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Daily Rental Price ($)",
        data: prices,
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace(/0.6/, "1")),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
        },
      },
      title: {
        display: true,
        text: "Car Daily Rental Prices",
        font: {
          size: 24,
          family: "Arial, sans-serif",
          weight: "bold",
        },
        color: "#333",
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw} per day`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
            family: "Verdana, sans-serif",
          },
          color: "#555",
        },
        title: {
          display: true,
          text: "Car Models",
          font: {
            size: 20,
            family: "Verdana, sans-serif",
          },
          color: "#333",
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
            family: "Verdana, sans-serif",
          },
          color: "#555",
        },
        title: {
          display: true,
          text: "Price in USD",
          font: {
            size: 20,
            family: "Verdana, sans-serif",
          },
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="my-5 bg-gray-50 p-5 rounded shadow-lg">
      {/* Responsive chart container */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PriceChart;
