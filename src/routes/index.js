import React from "react";
import { Switch, Route } from "react-router-dom";

import Browse from "../pages/Browse/Browse";
import Playlist from "../pages/Playlist/Playlist";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
