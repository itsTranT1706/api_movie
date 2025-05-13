const url = 'https://api.themoviedb.org/3/movie/244267?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2QyOTE5NTgwYjRkNjZkZWFiZjRjMTEzZTkyYjFkZiIsIm5iZiI6MTc0Njc0OTM0MC45NTEsInN1YiI6IjY4MWQ0NzljMGU5ODE3ZGM0ZTYzYmE3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTdYP1498nNf8RBgML_CMAu5CqzzJOvAR2CqGbl2Ez4'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));