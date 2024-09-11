const movies = {
  name : "오펜하이머",
  detail : {
    price : "50,000",
    date : "20240911"
  }
}
const movies2 = {
  name : "애나벨",
  detail : {
    price : "50,000",
  }
}

function printMovieData(movie){
  return movie.detail.date
}

console.log(printMovieData(movies).split(""));
console.log(printMovieData(movies)?.split(""));
console.log(printMovieData(movies2)?.split(""));

