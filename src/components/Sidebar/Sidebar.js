import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

export default () => (
  <Container>
    <div>
      <Nav>
        <li>
          <a href="https://teste.com">Navegar</a>
        </li>
        <li>
          <a href="#">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <a href="#">Seu Daily Mix</a>
        </li>
        <li>
          <a href="#">Tocados recentemente</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);
