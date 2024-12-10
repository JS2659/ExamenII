const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const productosRouter = require('./router/ProductosRouter')

app.use(bodyParser.json())
app.use(cors())

app.get('/productos', productosRouter)

app.get('/valorPromedioporCategoria', productosRouter)

app.get('/cantidadDeProductosPorMarca', productosRouter)

app.get('/valorTotalPorCategoria', productosRouter)

app.listen(5000,()=>{
    console.log('ejecutando en el puerto 5000')
})
