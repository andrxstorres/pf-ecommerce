class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

async getPaymentLink(req, res){
    try {         
        const payment = await this.subscriptionService.createPayment(req);           
        res.status(200).send(payment.data.init_point)        
    } catch (error){       
      return res
      .status(500)
      .json({error: true, msg: "failed to create payment."})
    }
  }

  webhook(req, res) { 
    if (req.method === "POST") { 
      let body = ""; 
      req.on("data", chunk => {  
        body += chunk.toString();
      });
      req.on("end", () => {  
        console.log(body, "webhook response"); 
        res.end("ok");
      });
    }
    return res.status(200); 
  }
}

module.exports = PaymentController;