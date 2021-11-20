import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { Howl, Howler } from "howler";
function App() {
  // Setup the new Howl.
  const themeSound = new Howl({
    src: ["/themeSong.mp3"],
    loop: true,
    volume: 0.75,
    onend: function () {
      console.log("done playing song");
    },
  });

  function SoundPlay() {
    if (!themeSound.playing()) {
      themeSound.play();
    }
    console.log("playing sound");
  }

  function SoundPause() {
    themeSound.pause();
    console.log("pause sound");
  }

  // useEffect(() => {
  //   themeSound.play();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={SoundPlay}>play</button>
        <button onClick={SoundPause}>pause</button>
      </header>
    </div>
  );
}

export default App;
