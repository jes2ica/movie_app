var api = require('../neo4j/api');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // api.getGraph(res);
  res.render('index', { title: 'Movie Knowledge Graph'})
});

function renderGraph() {
  console.log('render');
}

module.exports = router;
