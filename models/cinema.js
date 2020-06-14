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

Cinema.prototype.findByGenre = function(genre){
  const foundFilms = this.films.filter((film) =>{
    if (film.genre === genre){
      return film;
    }
  });
  return foundFilms;
};

module.exports = Cinema;
