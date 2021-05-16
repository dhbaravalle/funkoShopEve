module.exports=function(sequelize, dataTypes){
let alias="Productos";
let cols={
    id_product:{
    type: dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false},

    name_product:{
    type:dataTypes.STRING,
    allowNull:false},

    product_description:{
    type:dataTypes.STRING,
    allowNull:false},

    price:{
    type:dataTypes.INTEGER,
    allowNull:false},

    category:{
    type:dataTypes.STRING,
    allowNull:false
    }
};

let config={
    table_name:"products",
    timestamps:false
}


    let Productos=sequelize.define(alias, cols, config)

    return Productos
}