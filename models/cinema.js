const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titles = function(){
  const titles = this.films.map((film) => {
    return film.title;
  });
  return titles;
};

Cinema.prototype.findTitle = function(title){
  const foundFilm = this.films.filter((film) => {
    if (film.title === title){
      return film;
    }
  });
  return foundFilm;
};

module.exports = Cinema;
