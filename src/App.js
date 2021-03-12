import React from 'react';
import './App.css';
import Row from "./components/Row";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title={"Netflix Originals"} fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
