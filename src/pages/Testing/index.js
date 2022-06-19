import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Testing = ({ url }) => {
  const [playing, toggle] = useAudio(
    "http://listen.vo.llnwd.net/g3/prvw/4/1/8/2/7/2591672814.mp3"
  );

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      <br />
      <ReactAudioPlayer
        src="http://listen.vo.llnwd.net/g3/prvw/4/1/8/2/7/2591672814.mp3"
        autoPlay
        controls
        loop
      />
    </div>
  );
};

export default Testing;
