'use client'
import React, { useEffect, useState } from 'react'
import { getValorPromedioPorCategoria } from '@/Services/api'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
 PointElement,
 LineElement
);

export default function ValorPromedioPorCategoriaComponent() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [""],
      },
    ],
  });

  useEffect(()=>{
    getValorPromedioPorCategoria().then((data)=>{
      const ValorPromedio = data.map((item:any)=> item.valorPromedio)
      const categorias = data.map((item:any)=> item.categoryCode)

      setChartData({
        labels: categorias,
        datasets:[{
          label: "Valor Total Por Categoria",
          data: ValorPromedio,
          backgroundColor: [
            "rgba(255, 0, 0, 1)",
          ],
        }]
      })
    }).catch((error) => console.log("Tenemos un error: ", error));
  },[])

  return (
    <div>
       <div>
      {chartData ? (
        <div>
          <h3>titulo del Componente</h3>
          <Line data={chartData}></Line>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    </div>
  )
}
