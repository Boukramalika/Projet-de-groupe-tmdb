$(function () {
    const queryParams = getUrlVars();
  
    const artistId = queryParams["artistId"];
    if (!artistId) {
      $(".container").html(
        `<h2>You need to specify an film to see details, please use <a href="search.html">search</a></h2>`
      );
  
      return;
    }
  
    let url = URL_API_PERSON_DETAILS.replace('{id}', artistId) + "?api_key=" + URL_API_KEY;
    $.ajax({
      url,
      success: function (data) {
        console.log(data);
        $(".left").html(`<img src="${URL_IMAGE_PREFIX + data.profile_path}">`);
        $(".artist-name").text(data.name);
  
        $(".birthday").text("Né(e) le " + data.birthday);
        $(".deathday").text("Mort(e) le "+data.deathday);
        $(".placeofbirth").text(data.place_of_birth);
      },
    });
  });