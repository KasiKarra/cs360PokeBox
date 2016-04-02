var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {

    // show the request body in the command line
    console.log(req.body);

    // return a json response to angular
    res.json({
        'msg': 'success!'
    });
});

module.exports = router;