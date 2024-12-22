const express=require('express');
const {saveData,getHome,authenticateData,sendingTrends}=require("../controller/userController")
const userRouter=express.Router();
userRouter.get("/",getHome);
userRouter.post("/sign-up",saveData);
userRouter.post("/sign-in",authenticateData);
userRouter.get("/trends",sendingTrends);
module.exports=userRouter;