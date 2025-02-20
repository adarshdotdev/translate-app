export default function handleAudio(text: string, lang: string) {
  console.log(`Requested Language: ${lang}, Text: ${text}`);

  if (!text.trim()) {
    alert("Please enter some text to speak.");
    return;
  }

  const synth = window.speechSynthesis;

  // Function to get voices after ensuring they are loaded
  const getVoices = () =>
    new Promise<SpeechSynthesisVoice[]>((resolve) => {
      let voices = synth.getVoices();
      if (voices.length > 0) {
        resolve(voices);
      } else {
        synth.onvoiceschanged = () => {
          resolve(synth.getVoices());
        };
      }
    });

  getVoices().then((voices) => {
    // console.log("Available Voices:", voices.map((v) => v.lang).join(", "));

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;

    // Find the best matching voice
    const selectedVoice =
      voices.find((voice) => voice.lang === lang) || // Exact match
      voices.find((voice) => voice.lang.startsWith(lang.split("-")[0])) || // Match language prefix
      null; // No match

    if (selectedVoice) {
      speech.voice = selectedVoice;
      console.log("Selected Voice:", selectedVoice.name, selectedVoice.lang);
    } else {
      alert(`No voice found for language: ${lang}`);
      return;
    }

    // Speak the text
    synth.speak(speech);

    // Handle speech synthesis errors
    speech.onerror = (err) => {
      console.error("Speech synthesis error:", err);
      alert("Something went wrong while playing audio.");
    };
  });
}
