function Talent(records) {
  console.log(records[0].get('movie')['properties']['genres']);
  this.talent_name = records[0].get('talent')['properties']['name'];
  this.profile_path = records[0].get('talent')['properties']['profile_path'];

  const n = records.length;
  var ratings = 0, revenues = 0;
  var roles = new Set(), movies = new Set(), genres = new Set();
  for (var i = 0; i < records.length; i++) {
    var rating = Number.parseFloat(records[i].get('movie')['properties']['rating']);
    ratings += rating;

    var revenue = Number.parseFloat(records[i].get('movie')['properties']['revenue']);
    revenues += revenue;

    roles.add(records[i].get('r')['properties']['Role']);
    movies.push(records[i].get('movie')['properties']['title']);

    var splittedGenres = records[i].get('movie')['properties']['genres'].split("|");
    for (var j = 0; j < splittedGenres.length; j++) {
      if (splittedGenres[j] == "") continue;
      genres.add(splittedGenres[j]);
    }
  }
  this.ratings = (ratings / n).toPrecision(3);
  this.revenues = (revenue / 1000000).toPrecision(3);
  this.roles = Array.from(roles);
  this.movies = Array.from(movies);
  this.genres = Array.from(genres).sort();;
};

module.exports = Talent;
