const { Router } = require("express")
//controllers
const {
    postProduct,
    getProducts,    
    getProductsByCategoryId,
    productsWithCategories,
    getProductsBySubcategoryId,
    getProductById } = require("../controllers/productControllers")
    
    //middlewares
    const { validQueryGetProducts } = require("../middlewares/validQueryGetProducts")
    const { validIdParam } = require("../middlewares/validIdParam")

    const { Product, Category, Subcategory } = require("../db")
    const { Op } = require("sequelize")
//const { where } = require("sequelize/types")

const productRoutes = Router()

productRoutes.post("/", postProduct)

// productRoutes.get('/:id', validIdParam, getProductById)

//validando los datos ingresados por el query con un middleware "validQueryGetProducts"
//productRoutes.get("/", validQueryGetProducts, getProducts)

productRoutes.get('/productsWithCategories', async (req, res) => {

  const products = await Product.findAll()
  .then((data)=> {
      const subcategories = []
      data.map(product=> {
        !subcategories.includes(product.subcategoryId)
        ? subcategories.push(product.subcategoryId)    
        : null 
      })
      const subcategory = Subcategory.findAll({         
          where: {            
              id: subcategories
            }            
      })
      .then((subcategory)=> res.send(subcategory)
      )
      })
     // .then ((data)=> data.map(element=> console.log(element)))
  
      
      
        
        
        // {
        // where: {
        //     [Op.in]: subcategories
        // }
     //})

   // console.log('--->' + subcategories) 
  // res.send(subcategories)   
}) 
 


 
//validando los datos ingresados por el query con un middleware "validQueryGetProducts"

 
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

 
//productRoutes.get('/category/:id', validIdParam, validQueryGetProducts, getProductsByCategoryId)

//validando los datos ingresados por el query con un middleware "validQueryGetProducts"
//productRoutes.get('/subcategory/:id', validIdParam, validQueryGetProducts, getProductsBySubcategoryId)



module.exports = { productRoutes }
