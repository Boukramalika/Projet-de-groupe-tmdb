const URL_MOVIE = "https://api.themoviedb.org/3/movie/297761/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_MOVIE_RENT = "https://api.themoviedb.org/3/discover/movie?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=rent";
const YOUTUBE_URL = "https://www.youtube.com/embed/";

$(function () {

    $.ajax({
        method: "GET",
        url: URL_MOVIE,
        success: function (data, statuts, response) {

            let trailer = data.results;

            trailer.forEach(function (element) {

                let bandeAnnonce = `<div>`;
                bandeAnnonce += `<iframe src="${YOUTUBE_URL + element.key}"frameborder="1" allowfullscreen></iframe>`;
                bandeAnnonce += `<h3 class="titre-couleur-taille-trailer">${element.name}</h3>`;
                bandeAnnonce += element.first_air_date ? `<p class="date-couleur-taille-trailer"> ${element.first_air_date} </p>` : "";
                bandeAnnonce += `</div>`
                $(".scrollmenu-trailer").append(bandeAnnonce);
            });
        }
    });
    $("#television-trailer").click(function () {

        $(".scrollmenu-trailer").empty();

        $.ajax({
            method: "GET",
            url: URL_GRATUIT_TV,

            success: function (data, statuts, response) {

                let tvTrailer = data.results;
                let trailerTv = "";

                tvTrailer.forEach(function (elements) {
                    console.log(elements.id)
                    trailerTv = `<div>`;
                    trailerTv += `<class="movie-item"><img src="${URL_IMAGE_PREFIX + elements.poster_path}"class="m-4 rounded-2">`;
                    trailerTv += `<h3 class="titre-couleur-taille-trailer">${elements.original_title}</h3>`;
                    trailerTv += elements.release_date ? `<p class="date-couleur-taille-trailer"> ${elements.release_date} </p>` : "";
                    trailerTv += `</div>`
                    $(".scrollmenu-trailer").append(trailerTv);

                });
            },
        });
    });
    $("#louer-trailer").click(function () {

        $(".scrollmenu-trailer").empty();

        $.ajax({
            method: "GET",
            url: URL_MOVIE_RENT,

            success: function (data, statuts, response) {

                let louerTrailer = data.results;
                let rentTrailer = "";

                louerTrailer.forEach(function (elements) {
                    console.log("louer element :" +elements.id)
                    rentTrailer = `<div>`;
                    rentTrailer += `<img src="${URL_IMAGE_PREFIX + elements.poster_path}">`;
                    rentTrailer += `<h3 class="titre-couleur-taille-trailer">${elements.original_title}</h3>`;
                    rentTrailer += elements.release_date ? `<p class="date-couleur-taille"> ${elements.release_date} </p>` : "";
                    rentTrailer += `</div>`
                    $(".scrollmenu-trailer").append(rentTrailer);

                });
            },
        });
    });

});
