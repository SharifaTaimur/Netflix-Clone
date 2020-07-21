import React from "react";
import "./App.css";
import Row from "./components/row";
import requests from "./requests";
import Banner from "./components/banner";
import Nav from "./components/nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Orginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMoives} />
      <Row title="Comdedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
