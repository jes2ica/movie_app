var api = require('../neo4j/api');
var express = require('express');
var router = express.Router();

/* GET talent details. */
router.get('/:talentId', function(req, res, next) {
  api.getTalent(req.params.talentId, res);
});

module.exports = router;
