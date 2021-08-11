const URL_TENDANCE_FILM = "https://api.themoviedb.org/3/trending/all/day?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1";
const URL_TENDANCE_FILM_WEEK =" https://api.themoviedb.org/3/trending/all/week?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1"
$(function () {
    $.ajax({
        method: "GET",
        url: URL_TENDANCE_FILM ,
        success: function (data, statuts, response) {
            let moviesTendanceDay = data.results;
            let moviesTendanceToAdd = "";
            moviesTendanceDay .forEach(function (element) {
                console.log(element.id)
                moviesTendanceToAdd = `<div>`;
                moviesTendanceToAdd +=  `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"> </a>`;
                moviesTendanceToAdd+= `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                moviesTendanceToAdd += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                moviesTendanceToAdd += `</div>`
                $(".scrollmenu-tendance").append(moviesTendanceToAdd);
            });
        },
    });
    $("#cette-semaine").click(function () {
        $(".scrollmenu-tendance").empty();
        $.ajax({
            method: "GET",
            url: URL_TENDANCE_FILM_WEEK,
            success: function (data, statuts, response) {
                let moviesPopularWeek = data.results;
                let moviesTendanceWeekToAdd = "";
                moviesPopularWeek.forEach(function (element) {
                    moviesTendanceWeekToAdd  = `<div>`;
                    moviesTendanceWeekToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"></a>`;
                    moviesTendanceWeekToAdd += `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                    moviesTendanceWeekToAdd  +=element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                    moviesTendanceWeekToAdd += `</div>`
                    $(".scrollmenu-tendance").append(moviesTendanceWeekToAdd);
                });
            },
        });
    })
    $("#aujourdhui").click(function () {
        $(".scrollmenu-tendance").empty();
        $.ajax({
            method: "GET",
            url: URL_TENDANCE_FILM,
            success: function (data, statuts, response) {
                let moviesTendanceDay = data.results;
                let moviesTendanceToAdd = "";
                moviesTendanceDay .forEach(function (element) {
                    console.log(element.id)
                    moviesTendanceToAdd = `<div>`;
                    moviesTendanceToAdd +=  `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"> </a>`;
                    moviesTendanceToAdd+= `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                    moviesTendanceToAdd += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                    moviesTendanceToAdd += `</div>`
                    $(".scrollmenu-tendance").append(moviesTendanceToAdd);
                });
            },
        });
    })
});