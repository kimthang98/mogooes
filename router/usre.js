var router = require("express").Router()
var body = require("body-parser")
var path = require('path')


router.get("/sign-up",function(req,res){
    res.sendFile(path.join(__dirname,"../public/html/login_up.html"))
})
module.exports=router