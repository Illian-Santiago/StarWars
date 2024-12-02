function loadCharacters() {
    $('main').empty();
    $('main').append('<div></div>');

    if ($('#cambiarMain')[0].innerText == "Personajes") {
        let counter = 0;

        $('main').find("div").addClass('container')

        for (let i = 1; i <= 88; i++) {
            $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${i}.json`, function (data) {

                $('main').find(".container").append(`
                    <div class="card">
                    <h2 class="card-title">${data.name}</h2>
                    <img src=`+ data['image'] + `></img>
                    </div>`
                );

                counter++;
            })

            $('#cambiarMain').text('Cargar Películas');
        }
    } else {
        const movies = [
            { title: "Ascenso Skywalker", image: "/resources/AscensoSkywalker.jpg" },
            { title: "Imperio Contraataca", image: "/resources/ImperioContraataca.jpg" },
            { title: "Últimos Jedi", image: "/resources/UltimosJedi.jpg" }
        ]

        $('main').find("div").addClass('imagenes-pelis grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8')

        movies.forEach((movie) => {
            $('main').find("div").append(`
                <div class="flex justify-center">
                    <img src=`+ movie.image + `
                    class="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                </div>
            `);
        });

        $('#cambiarMain').text('Cargar Personajes');
    }
}