function Movie(record) {
  this.title = record.get('title');
  this.poster_path = record.get('poster_path');
  this.overview = record.get('overview');
  this.release_date = record.get('release_date');
  this.collection = record.get('collection');

  var rating = Number.parseFloat(record.get('rating'));
  var budget = Number.parseFloat(record.get('budget')) / 1000000;
  if (budget == 0) {
    this.efficiency = 0;
  } else {
    this.efficiency = rating / budget;
  }
  this.efficiency = this.efficiency.toPrecision(2);
};

module.exports = Movie;
