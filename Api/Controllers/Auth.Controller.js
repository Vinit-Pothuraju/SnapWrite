import { handleError } from "../helpers/handleError.js"
import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
export const Register= async(req,res,next)=>{
  try {
    const {username,email,password}=req.body
    const checkUser =await User.findOne({email})
    if(checkUser){
      // user already registerd
      next(handleError(409,'user already registered'))
    }
    // new register
    const hashedPassword= bcryptjs.hashSync(password,10)
    const user=new User({
      username,email,password:hashedPassword
    })
    await user.save();
    res.status(200).json({
      success:true,
      message:'Registration Successfull'
    })
  } catch (error) {
    next(handleError(500,error.message))
  }
}
export const Login= async(req,res)=>{

}