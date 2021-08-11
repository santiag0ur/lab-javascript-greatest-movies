// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const namesOfdirectors = movies.map((movie) => {
    return movie.director;
  });
  return namesOfdirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const moviesOfSpielberg = movies.filter((movie) => {
    return movie.director === 'Steven Spielberg';
  });

  let moviesOfSpielbergDrama = [];
  for (let i = 0; i < moviesOfSpielberg.length; i++) {
    for (let o = 0; o < moviesOfSpielberg[i].genre.length; o++) {
      if (moviesOfSpielberg[i].genre[o] === 'Drama') {
        moviesOfSpielbergDrama.push(moviesOfSpielberg[i]);
      }
    }
  }
  return moviesOfSpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  switch (movies.length > 0) {
    case true:
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].score == undefined) {
          movies[i].score = 0;
        }
      }
      const allScores = movies.map((movie) => {
        return movie.score;
      });
      const totalScores = allScores.reduce(function (
        accumulator,
        currentValue
      ) {
        if (currentValue === '') {
          currentValue = 0;
        }
        return accumulator + currentValue;
      });
      const averageScores = totalScores / allScores.length;
      let averageScoreRounded = Number(averageScores.toFixed(2));
      return averageScoreRounded;
      break;
    case false:
      return 0;
      break;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => {
    for (let i = 0; i < movie.genre.length; i++) {
      if (movie.genre[i] === 'Drama') {
        return movie;
      }
    }
  });
  switch (dramaMovies.length > 0) {
    case true:
      for (let i = 0; i < dramaMovies.length; i++) {
        if (dramaMovies[i].score == undefined) {
          dramaMovies[i].score = 0;
        }
      }
      const allScoresDrama = dramaMovies.map((movie) => {
        return movie.score;
      });
      const totalScoresDrama = allScoresDrama.reduce(function (
        accumulator,
        currentValue
      ) {
        if (currentValue === '') {
          currentValue = 0;
        }
        return accumulator + currentValue;
      });
      const averageScoresDrama = totalScoresDrama / allScoresDrama.length;
      let averageScoreRoundedDrama = Number(averageScoresDrama.toFixed(2));
      return averageScoreRoundedDrama;
      break;
    case false:
      return 0;
      break;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesByYear = movies.slice(0);
  moviesByYear.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title === b.title) {
      return 0;
    }
  });
  moviesByYear.sort((a, b) => {
    return a.year - b.year;
  });
  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let orderByAlphabet = movies.slice(0);
  orderByAlphabet.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title === b.title) {
      return 0;
    }
  });
  let the20FirstAlphabet = orderByAlphabet.slice(0, 20);
  let the20AlphaTitle = the20FirstAlphabet.map((movie) => {
    return movie.title;
  });
  return the20AlphaTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const copyOfMovies = movies.map((movie) => {
    const copyOfMovies = { ...movie };
    let totaltime = 0;
    switch (movie.duration.length > 3) {
      case true:
        totaltime = parseInt(movie.duration[0], 10) * 60;
        let minuteLength =
          movie.duration.indexOf('min') - (movie.duration.indexOf(' ') + 1);
        let minutePart = movie.duration.slice(3, 3 + minuteLength);
        totaltime = totaltime + parseInt(minutePart);
        break;
      case false:
        totaltime = parseInt(movie.duration[0], 10) * 60;
        break;
    }
    copyOfMovies.duration = totaltime;
    return copyOfMovies;
  });
  return copyOfMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  switch (movies.length > 0) {
    case true:
      const yearsOfMovies = [];
      let averageOfTheYear = 0;
      let averageYears = [];
      for (let i = 1900; i < 2021; i++) {
        const moviesOfTheYear = movies.filter((movie) => {
          if (movie.year === i) {
            return movie;
          }
        });
        yearsOfMovies.push(moviesOfTheYear);
      }
      for (o = 0; o < yearsOfMovies.length; o++) {
        let totalYearScore = 0;
        totalYearScore = yearsOfMovies[o].map((movie) => {
          totalYearScore = totalYearScore + movie.score;
          return totalYearScore;
        });
        switch (totalYearScore.length > 0) {
          case true:
            averageOfTheYear =
              totalYearScore[totalYearScore.length - 1] / totalYearScore.length;
            averageOfTheYear = Math.round(averageOfTheYear * 100) / 100;
            break;
          case false:
            averageOfTheYear = 0;
            break;
        }
        let thisYear = 1900 + o;
        averageYears.push({ year: thisYear, average: averageOfTheYear });
      }
      averageYears.sort((a, b) => {
        if (a.average > b.average) {
          return -1;
        }
        if (a.average < b.average) {
          return 1;
        }
        if (a.average === b.average) {
          return 0;
        }
      });
      return `The best year was ${averageYears[0].year} with an average score of ${averageYears[0].average}`;
      break;
    case false:
      return null;
      break;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
