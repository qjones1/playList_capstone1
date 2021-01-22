import React, { useState, useEffect } from "react";
import MyNavBar from "./navbar";
import "./styles.css";
import Playlist from "./playlist.js";
import Mixes from "./mixes.js";
import Songs from "./songs.js";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Switch>
        <Route path="/" exact component={Songs} />
        {/* <Route path="/main" component={Home} /> */}
        <Route path="/mixes" component={Mixes} />
        <Route path="/songs" component={Songs} />
        <Route path="/playlists" exact component={Playlist} /> 
      </Switch>
    </BrowserRouter>
  );
}
