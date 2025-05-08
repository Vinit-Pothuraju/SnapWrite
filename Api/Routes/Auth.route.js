import express from 'express'
import { Login, Register } from '../Controllers/Auth.Controller.js';

const AuthRoute=express.Router();
AuthRoute.post('/register',Register)
AuthRoute.post('/login',Login)


export default AuthRoute;