var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /availablebuses to check the available buses' });
});

router.get('/availablebuses', function(req, res, next) {
                res.send("These are the available Buses :<br/>Bus no 1:keshav Bus non-A/c <br/>Bus no 2:keshav travels ultra delux  <br/>Bus no 3:yamini travels A/c  <br/>Bus no 4:subham travels delux ");
               
});

module.exports = router;
