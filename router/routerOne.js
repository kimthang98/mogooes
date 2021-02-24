    var exp = require("express");
    var app = exp.Router()
    var router = require('../services/services.js')

    app.post("/",function(req,res){
        var name = req.body.name;
        var codes = req.body.nodes;
        var year = req.body.year;
        var phone = req.body.phone;
        var school = req.body.school;
        router.create(name, codes, year,phone,school)
        .then((data) => {
            res.json("tạo người dùng thành công")
        }).catch((err) => {
            res.json("không thể kết nối được server")
        });
    })
    app.get("/", function(req, res){
        var find = router.findMany()
        .then((result) => {
            res.json(find)
        }).catch((err) => {
            res.json(err)
        });
        //hiển thị toàn dữ liệu trong database
        // userSerives.getAllUser()
    })
    
    app.get("/:id", function(req, res){
        var id = req.params.id; 
        var find = router.find(id)
        .then((result) => {
            res.json(find)
        }).catch((err) => {
            res.json(err)
        });
        //hiển thị chi tiết một người dùng theo id
        // userSerives.getUserById()
    })
    
    app.put("/:id", function(req, res){
        var id = req.params.id;
        var name = req.body.name;
        var codes = req.body.codes;
        var year = req.body.year;
        var phone = req.body.phone;
        var school = req.body.school;

        router.put(id,name, codes, year,phone,school)
        .then((data) => {
            res.json("cập nhật người dùng thành công")
        }).catch((err) => {
            res.json("không thể kết nối được server")
        });
        //cập nhật toàn bộ giá trị theo id
    
    //câu khó  
        // check dữ liệu đầu vào có giá trị hay không
        // Nếu có thì cho cập nhật cột mà người dùng gửi lên,
        // nếu 1 cột mà không có giá trị người dùng truyền lên
        // thì không cho cập nhật
    })
    
    app.delete("/:id", function(req, res){
        var id = req.params.id;
        router.detele(id)
        .then((result) => {
            res.json("xóa thành công")

        }).catch((err) => {
            res.json("xóa không thành công")
        });
        //xóa người dung theo id
    })




    app.post("/post",function(req,res){
        var name = req.body.name;
        var codes = req.body.nodes;
        var year = req.body.year;
        var phone = req.body.phone;
        var school = req.body.school;
        router.login_up(name,codes,year,phone,school)
        .then((data) => {
            res.json({
                error:false,
                massage:"đăng ký thành công",
            })
            console.log(data);
        }).catch((err) => {
            res.json({
                error:true,
                massage:"đăng ký thất bại"
            })
        });

    } )



    module.exports = app