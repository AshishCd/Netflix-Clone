import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";


const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
