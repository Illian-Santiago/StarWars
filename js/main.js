$('#cambiarMain').on("click", function () { loadCharacters() })

function loadCharacters() {
    let counter = 0;

    $('main').empty();

    console.log($('#cambiarMain'));

    for (let i = 1; i <= 88; i++) {
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${i}.json`, function (data) {
            counter++;
            $("#counterDisplay").text(`Characters Loaded: ${counter}`);

            $('main').append('<div></div>');

            $('main').find("div").last().addClass('personaje')

            $('main').find("div").last().text(data['name']).css("background-image", "url(" + data['image'] + ")");
        })

        $('#cambiarMain').text('Cargar Películas');
        $('#cambiarMain').off("click").on("click", function () { loadMovies() });
    }
}

function loadMovies() {
    const movies = [
        { title: "Ascenso Skywalker", image: "resources/AscensoSkywalker.jpg" },
        { title: "Imperio Contraataca", image: "resources/ImperioContraataca.jpg" },
        { title: "Últimos Jedi", image: "resources/UltimosJedi.jpg" }
    ]

    $('main').empty();

    movies.forEach((movie, index) => {
        $('main').append('<div></div>');
        $('main').find("div").last().addClass('pelicula');
        $('main').find("div").last().text(movie.title).css("background-image", "url(" + movie.image + ")");
    });

    $('#cambiarMain').text('Cargar Personajes');
    $('#cambiarMain').off("click").on("click", function () { loadCharacters() })
}