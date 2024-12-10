const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')
const Productos = sequelize.define('Producto',{
    partNumber: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    productType:{
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryCode:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    brandCode:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    familyCode:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    lineCode:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    productSegmentCode:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    status:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    value:{
        type: DataTypes.STRING,
        allowNull: false
    },
    valueCurrency:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    defaultQuantityUnits:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    plannerCode:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    sourceLink:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
  {
    tableName: "producto",
    timestamps: false,
  })

  module.exports = Productos