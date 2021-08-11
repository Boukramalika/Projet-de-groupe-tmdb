
const URL_API_PERSON_DETAILS = "https://api.themoviedb.org/3/person/{id}";
const URL_API_MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/";
const URL_API_MOVIE_DETAILS_CREDITS = "https://api.themoviedb.org/3/movie/{id}/credits";
const URL_IMAGE_PREFIX_HD = "https://image.tmdb.org/t/p/original";
const URL_API_MOVIE_RECOMMENDATIONS = "https://api.themoviedb.org/3/movie/{movie_id}/recommendations"
let YOUTUBE_URL = "https://www.youtube.com/embed/";

$(function () {
  const queryParams = getUrlVars();
  console.log("query:" + queryParams)
  const filmId = queryParams["filmId"];

  if (!filmId) {
   $("section").html(
   `<h2>You need to specify an film to see details, please use <a href="search.html offset-5">search</a></h2>`
   );

  return;
  }

  let url = URL_API_MOVIE_DETAILS + filmId + "?api_key=" + URL_API_KEY;
  $.ajax({
    url,
    success: function (data) {
      console.log(data);
      $(".left").html(`<img src="${URL_IMAGE_PREFIX + data.poster_path}"  >`);
      $(".title-movie").text(data.original_title);
      $(".genres").text(data.genres.map(x => x.name).join(", "));
      $(".release_date").text(data.release_date);
      $(".runtime").text(Math.floor(data.runtime/60)+"h ") ;
      $(".overview").text(data.overview);
      $(".backdrop").css({
        backgroundImage: `url("${URL_IMAGE_PREFIX_HD + data.backdrop_path}")`,
        backgroundSize: "cover",
      });
      let url =
        URL_API_MOVIE_DETAILS_CREDITS.replace("{id}", data.id) +
        "?api_key=" +
        URL_API_KEY;
      $.ajax({
        url,
        success: function (details) {
          details.cast.forEach(function (data) {
            let urlPerson =
              URL_API_PERSON_DETAILS.replace("{id}", data.id) +
              "?api_key=" +
              URL_API_KEY;
            $.ajax({
              url: urlPerson,
              success: function (person) {
                let personHTML = `<a href="acteur.html?artistId=${person.id}" class="movie-item"><img src="${URL_IMAGE_PREFIX + person.profile_path}" class="m-4 rounded-2"> <div><div> ${person.name} </div> </div ></a>`;

                $(".cast").append(personHTML);
              },

            });
          });
        },
      });
    },
  });
//partie video
  let linkVideos = "https://api.themoviedb.org/3/movie/" + filmId + "/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
  $.ajax({
    url: linkVideos,
    success: function (data, statuts, response) {
      console.log("videos : " + data.results)
      let moviesVideo = data.results;
      let moviesVideoToAdd = "";
      moviesVideo.forEach(function (element) {
        console.log("element :" + element.id)
        console.log("element key:" + element.key)
        moviesVideoToAdd = `<div class=" video col-4 ">`;
        //moviesVideoToAdd+=  `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${linkyoutube + element.key}" class="m-4 rounded-2"> </a>`;
        moviesVideoToAdd += `<iframe src="${YOUTUBE_URL + element.key}"frameborder="1 m-4 rounded-2" allowfullscreen></iframe>`;
        moviesVideoToAdd += `</div>`
        $(".scrollmenu-video").append(moviesVideoToAdd);
      });
    },
  });

//partie font-img
  let linkImage = "https://api.themoviedb.org/3/movie/" + filmId + "/images?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
  $("#fond-img").click(function () {
    $(".scrollmenu-video").empty();
    $.ajax({
      url: linkImage,
      success: function (data, statuts, response) {
        console.log(data)
        let moviesBg = data.backdrops;
        let moviesBgToAdd = "";
        //console.log("elementbg" +moviesBg)
        moviesBg.forEach(function (element) {
          //console.log("elementbg" + element.id)
         // console.log("test for each :" +URL_IMAGE_PREFIX_HD + element.file_path)
          moviesBgToAdd = `<div class=" col-7">`;
          moviesBgToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX_HD + element.file_path}" class="m-4 rounded-2 img-fluid "> </a>`;
          
          moviesBgToAdd += `</div>`
          $(".scrollmenu-video").append(moviesBgToAdd);
        });
      },
    });
  });
  //partie affiche
let linkImageAffiche = "https://api.themoviedb.org/3/movie/" + filmId + "/images?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
$("#affiches").click(function () {
  $(".scrollmenu-video").empty();
  $.ajax({
    url: linkImageAffiche,
    success: function (data, statuts, response) {
      console.log(data.posters)
      let moviesImg = data.posters;
      let moviesImgToAdd = "";
      moviesImg.forEach(function (element) {
        console.log(element.id)
        moviesImgToAdd = `<div class="">`;
        moviesImgToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.file_path}" class="m-4 rounded-2 "> </a>`;
        moviesImgToAdd += `</div>`
        $(".scrollmenu-video").append(moviesImgToAdd);
      });
    },
  });
});


// retour a la partie video 
  $("#video").click(function () {
    $(".scrollmenu-video").empty();
    $.ajax({
      url: linkVideos,
      success: function (data, statuts, response) {
        console.log("videos : " + data.results)
        let moviesVideo = data.results;
        let moviesVideoToAdd = "";
        moviesVideo.forEach(function (element) {
          console.log("element :" + element.id)
          console.log("element key:" + element.key)
          moviesVideoToAdd = `<div class=" video col-4 ">`;
          //moviesVideoToAdd+=  `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${linkyoutube + element.key}" class="m-4 rounded-2"> </a>`;
          moviesVideoToAdd += `<iframe src="${YOUTUBE_URL + element.key}"frameborder="1" allowfullscreen></iframe>`;
          moviesVideoToAdd += `</div>`
          $(".scrollmenu-video").append(moviesVideoToAdd);
        });
      },
    });
  })

//partie recommandations
  let linkRecommandation = "https://api.themoviedb.org/3/movie/" + filmId + "/recommendations?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
  $.ajax({
    url: linkRecommandation,
    success: function (data, statuts, response) {
      console.log(data.results)
      let moviesRecommandation = data.results;
      let moviesRecommandationToAdd = "";
      moviesRecommandation.forEach(function (element) {
        console.log(element.id)
        moviesRecommandationToAdd = `<div>`;
        moviesRecommandationToAdd += `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}" class="m-4 rounded-2"> </a>`;
        moviesRecommandationToAdd += `<h3 class="titre-couleur-taille">${element.original_title}</h3>`;
        moviesRecommandationToAdd += element.release_date ? `<p class="date-couleur-taille"> ${element.release_date} </p>` : "";
        moviesRecommandationToAdd += `</div>`
        $(".scrollmenu-recommandation").append(moviesRecommandationToAdd);
      });
    },
  });

});

