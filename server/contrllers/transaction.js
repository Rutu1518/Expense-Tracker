import Transaction from "../models/Transaction.js";

const postTransaction = async (req, res) => {

    const {title, amount, category, type, user} = res.body;

    const transaction = new Transaction({
        title,
        amount,
        category,
        type,
        user
        });
           
    try {
        const savedTransaction = await transaction.save();
    
        res.json({
            message: `Transaction Successful`,      
            success:true,
            data:savedTransaction
        })
      }
      catch(e){
            res.json({
            message: e.message,
            success:false,
            data:null
            })
          } 
        }

        export {
            postTransaction 
        }

