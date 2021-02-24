var express = require("express")
var body = require("body-parser")
var app = express()
var routerOne = require("./router/routerOne.js")
var usre = require("./router/usre")
 
app.use(body.urlencoded({ extended: false }))
// parse application/json
app.use(body.json())

// app.get("/demo", function(req ,res){
//     res.json("chạy thành công")
// })
// app.post('/thffang', routerOne )
app.use('/user', routerOne )
app.use('/',usre)

app.listen(9000,function(){
    console.log('đã chạy thành công 9000');
})