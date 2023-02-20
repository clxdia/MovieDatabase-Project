import React, { useState } from "react";

import Trailers from "../components/Trailers";
import "../App.css";
import SearchComponent from "../components/SearchComponent";
import TrendingHomepage from "../components/TrendingHomepage";

const Homepage = () => {
  return (
    <>
      <div className="App">
        <header className="header">
          <h1 className="title_homepage">MovieFinder</h1>
          <SearchComponent />
        </header>
        <main>
          <TrendingHomepage category="movie" title="Trending Now in Movies" />
          <Trailers />
          <TrendingHomepage category="tv" title="Trending Now in TV Shows" />
        </main>
      </div>
    </>
  );
};

export default Homepage;
