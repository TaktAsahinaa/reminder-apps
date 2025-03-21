const TextSpeech = (text) => {
  if ('speechSynthesis' in window) {
   let utterance = new SpeechSynthesisUtterance(text);
   const voices = window.speechSynthesis.getVoices();
   
   utterance.rate = .9;    // kecepatan suara
   utterance.pitch = 1;   // nada suara
   utterance.volume = 1;  // volume suara
   setTimeout(() => {
    return window.speechSynthesis.speak(utterance);
   }, 500)
  } else {
   alert("Web Speech API tidak didukung oleh browser Anda.");
  }
}

export default TextSpeech;