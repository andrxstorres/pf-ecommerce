const { Router } = require("express")
const paymentRoutes = Router();

const PaymentController = require("../controllers/paymentController")
const PaymentService = require("../Services/PaymentService") 
const PaymentInstance = new PaymentController(new PaymentService())

const { Order, Orderdetail } = require("../db")
//controllers
const { postOrder } = require("../controllers/paymentModelController")

// paymentRoutes.get('/', function(req, res, next){ 

//   Order.
  

// })

paymentRoutes.post("/", function(req, res, next){   
  //Persiste el pedido en la b.d. y devuelve el link de pago.  
  let arr = []
  const id = postOrder(req, res)    
  .then((id)=> {

    const order = Order.findByPk(id, {
      include: {
        model: Orderdetail,
        where: {
          orderId: id,
        },
      },
    });
    order.then((order)=> PaymentInstance.getPaymentLink(req,res).then((link)=> res.status(200).send([{link: link, order: order}])))   
  })
  
  
  // .then ((id)=>{    
  // const order = Order.findByPk(id)  
  // })
  // .then((data)=>{console.log(data)})
})

//.then (() => PaymentInstance.getPaymentLink(req,res))      
  
 


module.exports = {
    paymentRoutes
}



 

 