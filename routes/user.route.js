var express= require('express');
var jwt= require('jsonwebtoken');
var userRouter=express.Router();

var UserController = require('../controllers/user.controller');

var AuthConfig= require('../middlewares/auth.middleware');

// http://localhost:9017/user/register
userRouter.post('/register',UserController.registerUser);
//http://localhost:9017/user/login
userRouter.post('/login',UserController.loginUser);

userRouter.post('/checkusername',UserController.checkUsername);

//http://localhost:9017/user/changePassword
userRouter.post('/changePassword',UserController.changePassword);

module.exports=userRouter;
