import React from "react";
import Slider from "rc-slider";

import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";

import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/DreamTheater2013AlbumCover.jpg/220px-DreamTheater2013AlbumCover.jpg"
        alt="Imagem"
      />

      <div>
        <span>Illumination Theory</span>
        <small>Dream Theater</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Suffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Suffle" />
        </button>
        <button>
          <img src={PlayIcon} alt="Suffle" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Suffle" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Suffle" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railSlider={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0, cursor: "pointer" }}
          />
        </ProgressSlider>

        <span>4:24</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railSlider={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
      />
    </Volume>
  </Container>
);

export default Player;
