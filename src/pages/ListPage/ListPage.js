import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./ListPage.css";

function ListPage(props) {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const apiKey = "23dbb244";
    const id = props.match.params.id;

    axios
      .get(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setTitle(data.title);
        data.movies.forEach((item) => {
          axios
            .get(`http://www.omdbapi.com/?i=${item}&apikey=${apiKey}`)
            .then((res) => res.data)
            .then((data) => {
              setMovies([...movies, data]);
            });
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <h2 className="list-page__subtitle">{title} :</h2>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a
                href={"https://www.imdb.com/title/" + item.imdbID}
                className="link__block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListPage;