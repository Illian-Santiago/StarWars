function textToSpeech() {
  // Texto que se leerá en voz alta
  const text =
    "Bienvenido a Wookie Wonders donde encontrarás el mejor contenido de Star Wars, a la derecha tienes un botón de login por si quieres pertenecer a nuestra comunidad, justo al lado tienes un apartado con los personajes más famosos de la serie, más abajo tienes algunas de las películas más famosas: Star wars el ascenso de skywalker, star wars el imperior contraataca y star wars los ultimos jedi";
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

const $button1 = $('#cambiarMain');
const $main = $('main');

$button1.on("click", function () { loadCharacters() })

function loadCharacters() {
  $main.empty();
  let counter = 0;

  for (let i = 1; i <= 88; i++) {
    $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${i}.json`, function (data) {
      counter++;
      $("#counterDisplay").text(`Characters Loaded: ${counter}`);

      $main
        .append('<div></div>');

      $main.find("div").last().addClass('item' + i)
        .css({
          'font-size': '12px',
          'border': '1px solid red',
          'display': 'inline-block',
          'width': '100px',
          'height': '130px',
          'background-color': 'coral',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'margin': '2px',
        });

      $main.find(".item" + i).text(i + ' - ' + data['name'])
        .css("background-image", "url(" + data['image'] + ")");
    })

    $button1.text('Cargar Películas');
    $button1.off("click").on("click", function () { loadMovies() });
  }
}

function loadMovies() {
  $main.empty();

  const movies = [
    { title: "Ascenso Skywalker", image: "resources/AscensoSkywalker.jpg" },
    { title: "Imperio Contraataca", image: "resources/ImperioContraataca.jpg" },
    { title: "Últimos Jedi", image: "resources/UltimosJedi.jpg" }
  ]

  movies.forEach((movie, index) => {
    $main.append('<div></div>');
    $main.find("div").last().addClass('movie' + index)

    $main.find(".movie" + index).text(movie.title)
      .css("background-image", "url(" + movie.image + ")");
  });

  $button1.text('Cargar Personajes');
  $button1.off("click").on("click", function () { loadCharacters() })
}