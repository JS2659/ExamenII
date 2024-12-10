const express = require('express')
const ProductosController = require('../controller/ProductosController')

const router = express.Router()

router.get('/productos', ProductosController.getProductos)

router.get('/valorPromedioporCategoria', ProductosController.getValorPromedioPorCategoria)

router.get('/cantidadDeProductosPorMarca', ProductosController.getCantidadProductosPorMarca)

router.get('/valorTotalPorCategoria', ProductosController.getValorTotalPorCategoria)

module.exports = router