var api = require('../neo4j/api');
var express = require('express');
var router = express.Router();
/* GET movie details. */
router.get('/:movieId', function(req, res, next) {
  api.getMovie(req.params.movieId, res);
});

module.exports = router;
