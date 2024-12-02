$('#cambiarMain').on("click", loadCharacters);

function loadCharacters() {
    if ($('#cambiarMain')[0].innerText == "Personajes") {
        let counter = 0;

        $('main').empty();

        for (let i = 1; i <= 88; i++) {
            $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${i}.json`, function (data) {
                counter++;
                $("#counterDisplay").text(`Characters Loaded: ${counter}`);

                $('main').append('<div></div>');

                $('main').find("div").last().addClass('personaje')

                $('main').find("div").last().text(data['name']).css("background-image", "url(" + data['image'] + ")");
            })

            $('#cambiarMain').text('Cargar Películas');
        }
    } else {
        location.reload();
    }
}