const controllerProductos={
    productDetails: function(req, res){
        res.render('./products/productdetails');
    },
    carrito:function(req, res){
        res.render('./products/cart')
},
    createProduct:function(req,res){
        res.render('./products/createProduct')
    },
    editProduct:function(req,res){
        res.render('./products/editProduct')
    },
    createProductSubmit:function(req,res){
        res.render('./products/productdetails')
    }
}
module.exports=controllerProductos