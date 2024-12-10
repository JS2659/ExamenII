const Productos = require('../modelos/Productos')
const sequelize = require('../bd/database')

exports.getProductos = async(req,res)=>{
    try {
        const productos = await Productos.findAll()

        res.status(200).send(productos)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getValorPromedioPorCategoria = async (req, res)=>{
    try {
        const producto = await Productos.findAll({
            attributes:[
                "categoryCode",
                [sequelize.fn("AVG", sequelize.col("value")), "valorPromedio"]
            ],
            group: ["categoryCode"]
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({error: 'ocurrio un error'+ error})
    }
}

exports.getCantidadProductosPorMarca = async (req,res)=>{
    try {
        const producto = await Productos.findAll({
            attributes:[
                "brandCode",
                [sequelize.fn("count", sequelize.col("brandCode")), "CantidadTotal"]
            ],
            group: ["brandCode"]
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({error: 'ocurrio un error'+ error})
    }
}
   
exports.getValorTotalPorCategoria = async (req,res)=>{
    try {
        const producto = await Productos.findAll({
            attributes:[
                "categoryCode",
                [sequelize.fn("sum", sequelize.col("value")), "valorTotal"]
            ],
            group: ["categoryCode"]
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({error: 'ocurrio un error'+ error})
    }
}