$('#cambiarMain').on("click", loadCharacters);

function loadCharacters() {
    if ($('#cambiarMain')[0].innerText == "Personajes") {
        let counter = 0;

        $('main').empty();

        $('main').append('<div></div>');
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
        location.reload();
    }
}