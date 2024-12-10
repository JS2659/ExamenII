'use client'
import React, { useEffect, useState } from 'react'
import { getValorTotalPorCategoria } from '@/Services/api'
import { Doughnut } from 'react-chartjs-2';
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

export default function ValorTotalPorCategoriaComponent() {

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
    getValorTotalPorCategoria().then((data)=>{
      const ValorTotal = data.map((item:any)=> item.valorTotal)
      const categorias = data.map((item:any)=> item.categoryCode)

      setChartData({
        labels: categorias,
        datasets:[{
          label: "Valor Total Por Categoria",
          data: ValorTotal,
          backgroundColor: [
            "rgba(255, 0, 0, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(255, 255, 0, 1)",
            "rgba(0, 255, 255, 1)",
            "rgba(255, 0, 255, 1)",
            "rgba(255, 165, 0, 1)",
            "rgba(238, 130, 238, 1)",
            "rgba(255, 192, 203, 1)",
            "rgba(169, 169, 169, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(255, 255, 255, 1)",
            "rgba(165, 42, 42, 1)",
            "rgba(144, 238, 144, 1)",
            "rgba(173, 216, 230, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(64, 224, 208, 1)"
          ],
          hoverOffset: 4,
        }]
      })
    }).catch((error) => console.log("Tenemos un error: ", error));
  },[])
  return (
    <div>
      {chartData ? (
        <div>
          <h3>titulo del Componente</h3>
          <Doughnut data={chartData}></Doughnut>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
