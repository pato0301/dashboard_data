const path = require('path');
const fs = require('fs');

module.exports = {
    root: (req,res) => {
        res.render("main")
    } 
}