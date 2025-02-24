import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { postSignup, postLogin} from "./controllers/user.js";
import { postTransaction, getTransactions, deleteTransaction  } from "./controllers/transaction.js";

const app = express();
app.use(express.json());
app.use(cors());

const connetDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log(`MongoDB Connected Successfully`);
    }
};
connetDB();


app.get('/', (req, res)=>{    
    res.json({                  
        message: `Welcome to Expense Tracker API`   
    })
})

app.post("/signup",postSignup )

app.post("/login",postLogin )

app.post("/transaction", postTransaction )

app.get("/transaction", getTransactions)

app.delete("/transaction/:id", deleteTransaction)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
   console.log(`server is running on ${PORT}`);
})




