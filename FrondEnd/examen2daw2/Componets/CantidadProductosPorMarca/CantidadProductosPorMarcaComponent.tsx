'use client'
import { getCantidadProductosPorMarca } from '@/Services/api'
import React, { useEffect, useState }  from 'react'
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function CantidadProductosPorMarcaComponent() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [""],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(()=>{
    getCantidadProductosPorMarca().then((data)=>{
      const marcas = data.map((item:any)=>item.brandCode)
      const cantidad = data.map((item:any)=>item.CantidadTotal)

      setChartData({
        labels : marcas,
        datasets:[
          {
            label: "Cantidad de Productos Por Marca",
            data: cantidad,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(57, 111, 122, 0.2)"
            ],
            hoverOffset: 4,
          }
        ]
      })
    }).catch((error) => console.log("Tenemos un error: ", error))
  },[])

  return (
    <div>
      {chartData ? (
        <div>
          <h3>titulo del Componente</h3>
          <Pie data={chartData}></Pie>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
