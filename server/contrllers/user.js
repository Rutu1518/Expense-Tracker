import User from "../models/User.js";

const postSignup = async (req, res) =>{
    const {fullName, Email, Password, DOB} = req.body;
 
    console.log(req.body)

    const user = new User ({ 
        fullName,
        Email,
        Password,
        DOB: new Date(DOB)
    });

    try {
    const savedUser = await user.save();

    res.json({
        message: `User SignUp successfully`,      
        success:true,
        data:savedUser
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

const postLogin = async (req, res) =>{
    const {Email, Password} = req.body;

    const user = await User.findOne({
        Email:Email,
        Password:Password
    });

    if(user){
        return res.json({
            success:true,
            message:"Login Successfully",
            data:user
        })
    }
    else{
        return res.json({
            success:false,
            message:"Invalid Credentials",
            data:null
        })
    }
}

export {postSignup , postLogin}
