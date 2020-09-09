const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt')

module.exports = {
    root: (req,res) => {
        res.render("main")
    },
    login: (req,res) => {
        res.render("login")
    },
    checkLogin: (req,res) => {
        console.log(req.body);

        res.render("login")
    }
}