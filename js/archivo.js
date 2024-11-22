function textToSpeech() {
  // Texto que se leerá en voz alta
  const text = "Prueba texto";
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}
