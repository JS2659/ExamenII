import axios from "axios";

export const getValorPromedioPorCategoria = async ()=>{
    const response = await axios.get('http://localhost:5000/valorPromedioporCategoria')
    return response.data
}

export const getCantidadProductosPorMarca = async ()=>{
    const response = await axios.get('http://localhost:5000/cantidadDeProductosPorMarca')
    return response.data
}

export const getValorTotalPorCategoria = async ()=>{
    const response = await axios.get('http://localhost:5000/valorTotalPorCategoria')
    return response.data
}