const axios = require("axios");

class PaymentService {
   
    async createPayment(req) {     

      const items = req.body.products.map(product=>{

        return {          
          "title": product.product.title,
          "description": product.product.description,
          //"picture_url": "http://www.myapp.com/myimage.jpg",
          //"category_id": "car_electronics",
          "quantity": product.amount,
          "currency_id": "ARS",
          "unit_price":  product.product.price
        }       

      }) 
        const url = "https://api.mercadopago.com/checkout/preferences";

        const body = {
            "payer_email": "arielbujeiro2@gmail.com",            
            "items": items,
              "payer": {
                "phone": {},
                "identification": {},
                "address": {}
              },
              "payment_methods": {
                "excluded_payment_methods": [
                  {}
                ],
                "excluded_payment_types": [
                  {}
                ]
              },
              "shipments": {
                "free_methods": [
                  {}
                ],
                "receiver_address": {}
              },
              "back_urls": {
                "success": "http://localhost:3000",			         
              },              
              notification_url: "http://localhost:3001/api/webhook",                                         
          		auto_return: "approved",
              "differential_pricing": {},
              "metadata": {}             
        };

        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "applitacion/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return payment;
    }
}

module.exports = PaymentService
    
    