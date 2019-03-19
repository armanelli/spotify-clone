import React from "react";

import { Container, Search, User } from "./styles";

export default function Header() {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Search" />
      </Search>
      <User>
        <img src="https://avatars3.githubusercontent.com/u/11942562?s=460&v=4" alt="Avatar" />
        Rafael Armanelli
      </User>
    </Container>
  );
}
