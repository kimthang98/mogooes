var servi = require("../config (mongoDB)/mongUser")


function createUser( name, codes, year, phone,school){
    return servi.create({
        name: name,
        codes: codes,
        year:year,
        phone:phone,
        school:school
    })
    
}
function findManyUser(){
    return servi.find()
    
}

function findUser(id){
    return servi.find({
        _id:id
    })
    
}
function putUser(id , name, codes, year, phone,school){
    return servi.updateOne({
        _id:id
    },{
        name: name,
        codes: codes,
        year:year,
        phone:phone,
        school:school
    })
    
}
function deleteUser(id){
    return servi.deleteOne({
        _id:id
    })
    
}


function postlogin_up(name, codes, year, phone,school){
    return servi.create({
        name: name,
        codes: codes,
        year:year,
        phone:phone,
        school:school
    })
}

module.exports = {
    create : createUser,
    findMany   : findManyUser,
    find    : findUser,
    put : putUser,
    detele: deleteUser,
    login_up: postlogin_up



} 

// createUser()
    // name : String,
    // codes: Number,
    // year: Number,
    // phone: Number,
    // school: String