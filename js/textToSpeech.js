function textToSpeech() {
    // Texto que se leerá en voz alta
    const text =
        "Bienvenido a Wookie Wonders donde encontrarás el mejor contenido de Star Wars, a la derecha tienes un boton donde puedes hacer que se muestren los personajes más famosos de la serie, más abajo tienes algunas de las películas más famosas: Star wars el ascenso de skywalker, star wars el imperior contraataca y star wars los ultimos jedi";
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}