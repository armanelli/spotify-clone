import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

export default () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="https://teste.com">Navegar</a>
        </li>
        <li>
          <a href="#">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="#">Seu Daily Mix</a>
        </li>
        <li>
          <a href="#">Tocados recentemente</a>
        </li>
        <li>
          <a href="#">Músicas</a>
        </li>
        <li>
          <a href="#">Álbums</a>
        </li>
        <li>
          <a href="#">Artistas</a>
        </li>
        <li>
          <a href="#">Estações</a>
        </li>
        <li>
          <a href="#">Arquivos locais</a>
        </li>
        <li>
          <a href="#">Vídeos</a>
        </li>
        <li>
          <a href="#">Podcasts</a>
        </li>
      </Nav>

      <Nav main>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="https://teste.com">Melhores do Rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);
