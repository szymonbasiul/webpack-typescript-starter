const { ModuleResolutionKind } = require("typescript");
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/', (request, response) =>{
    dataPartWithPasswordAndLogin = request.body;
    console.log('consoled p&d', dataPartWithPasswordAndLogin);
    fs.writeFile(path.join(__dirname, '/', 'test.json'),
    JSON.stringify(dataPartWithPasswordAndLogin, null, 2), // Json formated in correct way
    err => {
        if (err) throw err;
        console.log('json saved', dataPartWithPasswordAndLogin);
    })
    response.json ({
        status: 'sent ok'
    })
    });

    module.exports = router ; 