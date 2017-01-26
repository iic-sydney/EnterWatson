var express = require('express')
var router = express.Router()


// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res, next) {
  res.render('index', {title : "Watson Demonstration"})
})

// pages/toneanalyser route 
router.get('/pages/toneanalyser', function(req, res, next) {
  res.render('ToneAnalyser', {})
})

router.get('/pages/watsondiscovery', function(req, res, next) {
  res.render('WatsonDiscovery', {})
})

module.exports = router
