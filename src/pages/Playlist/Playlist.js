import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

export default function Playlist() {
  return (
    <Container>
      <Header>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/DreamTheater2013AlbumCover.jpg/220px-DreamTheater2013AlbumCover.jpg"
          alt="Playlist"
        />
        <div>
          <span>PLAYLIST</span>
          <h1>Rock Forever</h1>
          <p>13 músicas</p>
          <button>PLAY</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Música</th>
          <th>
            <img src={ClockIcon} alt="Duração" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Duração" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Duração" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Duração" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Duração" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Duração" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Duração" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Duração" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
}
