const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt')

module.exports = {
    root: (req,res) => {
        res.render("main")
    },
    login: (req,res) => {
        res.render("login", {page:'login'})
    },
    checkLogin: (req,res) => {
        console.log(req.body);
        req.session.user = req.body.email
        res.redirect("/")
    },
    register: (req,res) => {
        res.render("register", {page:'register'})
    },
    saveNewUser: (req,res) => {
        console.log(req.body);
        res.redirect("/")
    }
}