const { User } = require("../models/User")
const connect = require("../DBconnect")

const UserController = class{
    
    constructor(req){
        this.name = req.body.pseudo
        this.mail = req.body.mail
        this.password = req.body.password
    }

    addUser(){
        try{
            new User({name: this.name, mail :this.mail, password:this.password, isAdmin: false}).save()
        }catch(error){
            return [400, error.message]
        }
        return [200, "FAIT"]
    }
}

module.exports = { UserController };