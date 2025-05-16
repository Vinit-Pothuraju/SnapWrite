import express from 'express'
import { GoogleLogin, Login, Register } from '../Controllers/Auth.Controller.js';

const AuthRoute=express.Router();
AuthRoute.post('/register',Register)
AuthRoute.post('/login',Login)
AuthRoute.post('/google-login',GoogleLogin)


export default AuthRoute;