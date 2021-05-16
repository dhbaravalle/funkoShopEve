const controllerProductos = require('../controllers/controllerProductos');
const express=require('express')
const router=express.Router()

router.get('/productdetails', controllerProductos.productDetails)
router.get('/cart', controllerProductos.carrito)
router.get('/createProduct', controllerProductos.createProduct)
router.post('/createProduct', controllerProductos.createProductSubmit)
router.get('/editProduct', controllerProductos.editProduct)

module.exports=router