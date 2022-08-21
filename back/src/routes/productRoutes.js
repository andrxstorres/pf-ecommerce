const { Router } = require("express")
//controllers
const {
    postProduct,
    getProducts,
    getProductsByCategoryId,
    getProductsBySubcategoryId,
    getProductById } = require("../controllers/productControllers")
    
    //middlewares
    const { validQueryGetProducts } = require("../middlewares/validQueryGetProducts")
    const { validIdParam } = require("../middlewares/validIdParam")


const productRoutes = Router()

productRoutes.post("/", postProduct)


productRoutes.get('/:id', validIdParam, getProductById)

//validando los datos ingresados por el query con un middleware "validQueryGetProducts"
productRoutes.get("/", validQueryGetProducts, getProducts)

//validando los datos ingresados por el query con un middleware "validQueryGetProducts"

<<<<<<< HEAD
//Get products by categoryId
//Query 
productRoutes.get('/category/:idCategory', async (req, res) => {
    let products
    const categoryId = req.params.idCategory;           
    const subCategory = await Subcategory.findAll({where: {categoryId: categoryId}})   
   
    subCategory.length ?
    (
        products = await Product.findAll({where: {subcategoryId: subCategory[0].id}}),
        res.send(products)
    )
    
    : res.send('No hay resultados.')
  
})

=======
productRoutes.get('/category/:id', validIdParam, validQueryGetProducts, getProductsByCategoryId)

//validando los datos ingresados por el query con un middleware "validQueryGetProducts"
productRoutes.get('/subcategory/:id', validIdParam, validQueryGetProducts, getProductsBySubcategoryId)


>>>>>>> 83fa8901de49cd5ec916e7bfeb1812043aca977e
module.exports = { productRoutes }
