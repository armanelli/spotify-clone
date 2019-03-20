import React from "react";
import { Container, Title, List, Playlist } from "./styles";

export default function Browse() {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/DreamTheater2013AlbumCover.jpg/220px-DreamTheater2013AlbumCover.jpg"
            alt="Playlist"
          />
          <strong>Rock dos bons</strong>
          <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial</p>
        </Playlist>
      </List>
    </Container>
  );
}
