const URL_BIG_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)";
$(function () {
    $.ajax({
        method: "GET",
        url: URL_POPULAIRE_TV,
        success: function (data, statuts, response) {
            let moviesPopularTvArray = data.results.map(function (element) {
                let moviesPopularTvArrayToAdd = `${URL_BIG_IMAGE_PREFIX + element.backdrop_path}`;
                return moviesPopularTvArrayToAdd;
            });
            let index = 0;
            console.log("avant");
            setInterval(() => {
                $('.background-image').css({ "background-image": `url("${moviesPopularTvArray[index]}")` });
                index++
                if (index === 20) {
                    index = 0;
                }
            }, 7000);
        },
    });
});