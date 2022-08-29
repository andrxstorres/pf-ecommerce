const { Router } = require("express")
const webhookRoutes = Router();

const PaymentController = require("../controllers/paymentController")
const PaymentService = require("../Services/PaymentService") 
const PaymentInstance = new PaymentController(new PaymentService())

//controllers
//const { postOrder } = require("../controllers/paymentModelController")

// paymentRoutes.get('/', function(req, res, next){ 
//     //Devuelve link de pago.    
//     PaymentInstance.getPaymentLink(req,res)  
// })

webhookRoutes.post("/", function(req, res, next){       
  PaymentInstance.webhook(req,res)      
})

module.exports = {
  webhookRoutes
}



 

 