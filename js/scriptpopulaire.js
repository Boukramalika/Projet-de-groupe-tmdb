const URL_POPULAIRE_STREAMING = "https://api.themoviedb.org/3/movie/12/similar?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=FR&page=1";
const URL_POPULAIRE_TV = "https://api.themoviedb.org/3/tv/popular?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=fr&page=1";
const URL_POPULAIRE_LOUER = "https://api.themoviedb.org/3/movie/28/similar?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=FR&page=1";
const URL_POPULAIRE_FILM = "https://api.themoviedb.org/3/movie/878/similar?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=FR&page=1";


$(function () {

    $.ajax({
        method: "GET",
        url: URL_POPULAIRE_STREAMING,

        success: function (data, statuts, response) {
            let moviesPopular = data.results;
            let moviesPopularToAdd = "";
            moviesPopular.forEach(function (element) {
                moviesPopularToAdd = `<div>`;
                moviesPopularToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"> </a>`;
                moviesPopularToAdd += `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                moviesPopularToAdd += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                moviesPopularToAdd += `</div>`
                $(".scrollmenu-populaire").append(moviesPopularToAdd);
            });
        },
    });

    $("#television").click(function () {
        $(".scrollmenu-populaire").empty();

        $.ajax({
            method: "GET",
            url: URL_POPULAIRE_TV,

            success: function (data, statuts, response) {
                let moviesPopularTv = data.results;
                let moviesPopularTvToAdd = "";
                moviesPopularTv.forEach(function (element) {
                    moviesPopularTvToAdd = `<div>`;
                    moviesPopularTvToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"></a>`;
                    moviesPopularTvToAdd += `<h3 class="titre-couleur-taille">${element.original_name}</h3>`;
                    moviesPopularTvToAdd += element.first_air_date ? `<p class="date-couleur-taille"> ${element.first_air_date} </p>` : "";
                    moviesPopularTvToAdd += `</div>`
                    $(".scrollmenu-populaire").append(moviesPopularTvToAdd);
                });
            },
        });
    })

    $("#louer").click(function () {
        $(".scrollmenu-populaire").empty();

        $.ajax({
            method: "GET",
            url: URL_POPULAIRE_LOUER,

            success: function (data, statuts, response) {
                let moviesPopularRent = data.results;
                let moviesPopularRentToAdd = "";
                moviesPopularRent.forEach(function (element) {
                    moviesPopularRentToAdd = `<div>`;
                    moviesPopularRentToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"></a>`;
                    moviesPopularRentToAdd += `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                    moviesPopularRentToAdd += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                    moviesPopularRentToAdd += `</div>`
                    $(".scrollmenu").append(moviesPopularRentToAdd);
                });
            },
        });
    })

    $("#cinema").click(function () {
        $(".scrollmenu-populaire").empty();
        $.ajax({

            method: "GET",
            url: URL_POPULAIRE_FILM,

            success: function (data, statuts, response) {
                let moviesPopularFilm = data.results;
                let moviesPopularFilmToAdd = "";
                moviesPopularFilm.forEach(function (element) {
                    moviesPopularFilmToAdd = `<div>`;
                    moviesPopularFilmToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"></a>`;
                    moviesPopularFilmToAdd += `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                    moviesPopularFilmToAdd += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                    moviesPopularFilmToAdd += `</div>`
                    $(".scrollmenu").append(moviesPopularFilmToAdd);
                });
            },
        });
    })

    $("#streaming").click(function () {
        $(".scrollmenu-populaire").empty();
        $.ajax({

            method: "GET",
            url: URL_POPULAIRE_STREAMING,

            success: function (data, statuts, response) {
                let moviesPopular = data.results;
                let moviesPopularToAdd = "";
                moviesPopular.forEach(function (element) {
                    console.log(element.id)
                    moviesPopularToAdd = `<div>`;
                    moviesPopularToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"></a>`;
                    moviesPopularToAdd += `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                    moviesPopularToAdd += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                    moviesPopularToAdd += `</div>`
                    $(".scrollmenu-populaire").append(moviesPopularToAdd);

                });
            },
        });
    })
});
