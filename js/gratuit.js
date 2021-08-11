const URL_GRATUIT_FILM = "https://api.themoviedb.org/3/discover/movie?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-FR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free";
const URL_GRATUIT_TV = "https://api.themoviedb.org/3/discover/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-FR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=free"

$(function () {

    $.ajax({
        method: "GET",
        url: URL_GRATUIT_FILM,

        success: function (data, statuts, response) {

            let moviesGratuit = data.results;

            moviesGratuit.forEach(function (element) {
                console.log(element)
                let freeMovies = `<div>`;
                freeMovies += `<class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"class="m-4 rounded-2">`;
                freeMovies += `<h3 class="titre-couleur-taille-gratuit">${element.original_title}</h3>`;
                freeMovies += element.release_date ? `<p class="date-couleur-taille-gratuit"> ${element.release_date} </p>` : "";
                freeMovies += `</div>`
                $(".scrollmenu-gratuit").append(freeMovies);

            });
        },
    });
    $("#television-gratuit").click(function () {
        $(".scrollmenu-gratuit").empty();

        $.ajax({
            method: "GET",
            url: URL_GRATUIT_TV,

            success: function (data, statuts, response) {

                let tvGratuit = data.results;
                let tvGratuitToAdd = "";

                tvGratuitToAdd.forEach(function (element) {
                    let freeTv = `<div>`;
                    freeTv += `<img src="${URL_IMAGE_PREFIX + element.poster_path}">`;
                    freeTv += `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
                    freeTv += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
                    freeTv += `</div>`
                    $(".scrollmenu-gratuit").append(freeTv);

                });
            },
        });
    });
});
