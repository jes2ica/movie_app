var neo4j = require('neo4j-driver').v1;
var express = require('express');
var d3 = require("d3");

var Movie = require('../models/movie')
var Talent = require('../models/talent')

// var driver = neo4j.driver("bolt://" + 'neo4j_db', {});
var driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "1234"));

var async = require('async');
// Register a callback to know if driver creation was successful:
driver.onCompleted = function () {
    console.log('Connected to neo4j_db');
};

exports.getMovie = function(id, res) {
  var session = driver.session();
  return session.run(
    'MATCH (m:Movie {id: {id}}) WITH m.title as title, m.overview as overview, m.release_date as release_date, m.poster_path as poster_path, m.rating as rating, m.budget as budget, m.collection as collection MATCH (n:Movie {collection: collection}) RETURN title, overview, release_date, poster_path, rating, budget, collection, n.title as related_titles', {id: id})
    .then(result => {
      session.close();
      var record = result.records[0];
      res.render('movie', {
        m: Movie(record),
      });
    })
    .catch(error => {
      session.close();
      throw error;
    });
}

exports.getTalent = function(id, res) {
  var session = driver.session();
  return session.run(
    'MATCH credit =(talent {id: {id}})-[r]->(movie) RETURN *', {id: id})
    .then(result => {
      session.close();
      var records = result.records;
      res.render('talent', {
        t: Talent(records),
      });
    })
    .catch(error => {
      session.close();
      throw error;
    });
}
