import React, { useState, useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import axios from "../axios";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleClick = async(movie) => {
    console.log(trailerUrl);
    if(trailerUrl !== ""){
      setTrailerUrl("");
    } else {
      let trailerUrl = await axios.get(
        `/movie/${movie.id}/videos?api_key=5f2c030f1a7d00715ae868ea96dfaeef`
      );
      setTrailerUrl(trailerUrl.data.results[0]?.key);
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((i) => {
          return (
            <img
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              key={i.id}
              src={`${baseUrl}${isLargeRow ? i.poster_path : i.backdrop_path}`}
              alt={i.original_title}
              onClick={() => handleClick(i)}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
