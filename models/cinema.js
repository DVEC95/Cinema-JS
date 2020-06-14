const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titles = function(){
  const titles = this.films.map((film) => {
    return film.title;
  });
  return titles;
};

Cinema.prototype.findByTitle = function(title){
  const foundFilm = this.films.filter((film) => {
    if (film.title === title){
      return film;
    }
  });
  return foundFilm;
};

Cinema.prototype.findByGenre = function(genre){
  const foundFilms = this.films.filter((film) => {
    if (film.genre === genre){
      return film;
    }
  });
  return foundFilms;
};

Cinema.prototype.findByYear = function(year){
  const foundFilms = this.films.filter((film) => {
    if (film.year == year){
      return film;
    }
    else {
      return null;
    }
  });
  return foundFilms;
};

Cinema.prototype.overLength = function(length){
  const foundFilms = this.films.map((film) => {
    if (film.length >= length){
      return true;
    }
    else {
      return false;
    }
  });
  return foundFilms;
};

Cinema.prototype.totalRunningTime = function(){
  const totalTime = this.films.reduce((counter, film) => {
    return counter + film.length;
  }, 0);
  return totalTime;
};

module.exports = Cinema;
