import React, { useCallback, useEffect } from 'react';

const sounds = [
  {
    key: 'Q',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav'
  },
  {
    key: 'W',
    wav: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/64[kb]kick1.wav.mp3'
  },
  {
    key: 'E',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav'
  },
  {
    key: 'A',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav'
  },
  {
    key: 'S',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav'
  },
  {
    key: 'D',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav'
  },
  {
    key: 'Z',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav'
  },
  {
    key: 'X',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav'
  },
  {
    key: 'C',
    wav: 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav'
  }
]

const App = () => {



  // App Keys
  const appKeys = useCallback((event) => {

    // Q
    if (event.keyCode === 81) {
      event.preventDefault();
      const audioFile = new Audio(sounds[0].wav)
      audioFile.play()
    }

    // W
    if (event.keyCode === 87) {
      event.preventDefault();
      const audioFile = new Audio(sounds[1].wav)
      audioFile.play()
    }

    // E
    if (event.keyCode === 69) {
      event.preventDefault();
      const audioFile = new Audio(sounds[2].wav)
      audioFile.play()
    }

    // A
    if (event.keyCode === 65) {
      event.preventDefault();
      const audioFile = new Audio(sounds[3].wav)
      audioFile.play()
    }

    // S
    if (event.keyCode === 83) {
      event.preventDefault();
      const audioFile = new Audio(sounds[4].wav)
      audioFile.play()
    }

    // D
    if (event.keyCode === 68) {
      event.preventDefault();
      const audioFile = new Audio(sounds[5].wav)
      audioFile.play()
    }

    // Z
    if (event.keyCode === 90) {
      event.preventDefault();
      const audioFile = new Audio(sounds[6].wav)
      audioFile.play()
    }

    // X
    if (event.keyCode === 88) {
      event.preventDefault();
      const audioFile = new Audio(sounds[7].wav)
      audioFile.play()
    }

    // C
    if (event.keyCode === 67) {
      event.preventDefault();
      const audioFile = new Audio(sounds[8].wav)
      audioFile.play()
    }

}, [])

useEffect(() => {
    window.addEventListener('keydown', appKeys);
    return () => {
        window.removeEventListener("keydown", appKeys);
    };
}, [appKeys]);

  return (
    <div id="drum-machine" className="container">
      <div id="display" className="display">
        {sounds.map((sound, index) => (
          <Box text={sound.key} audio={sound.wav} key={index} />
        ))}
      </div>
    </div>
  );
}

const Box = ({text, audio}) => {

  const audioFile = new Audio(audio)

  const playSound = () => {
    if (audioFile.play()) {
      return
    }
    audioFile.play()
  }

  return (
    <div className="box" onClick={playSound}>
      {text}
    </div>
  )
}

export default App;
