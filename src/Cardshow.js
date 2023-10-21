import React, { useState } from "react";
import Display from "./Display";

const Cardshow = () => {
  const [movie, setmovie] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg",
      rating: 9.3,
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 9.2,
    },
    {
      title: "Inception",
      description:
        "A thief who enters the dreams of others to steal secrets leads a team on an intricate heist of a lifetime.",
      posterURL:
        "https://m.media-amazon.com/images/I/61xzvfJiNkL._AC_UF894,1000_QL80_.jpg",
      rating: 8.8,
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      posterURL:
        "https://m.media-amazon.com/images/I/41Al9falobL._AC_UF894,1000_QL80_.jpg",
      rating: 8.8,
    },
    {
      title: "The Matrix",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: 8.7,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      description:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 8.7,
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://rukminim2.flixcart.com/image/850/1000/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8euacqngyh.jpeg?q=20",
      rating: 9.0,
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
      posterURL: "https://m.media-amazon.com/images/I/81sZU-iKNGL.jpg",
      rating: 8.8,
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL: "https://m.media-amazon.com/images/I/81j0OkNZ05L.jpg",
      rating: 8.9,
    },
    {
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      posterURL:
        "https://www.themoviedb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      rating: 9.0,
    },
  ]);
  const [search, setSearch] = useState("");
  console.log(search);
  const filteredMovies = movie.filter(
    (el) =>
      el.title.toLowerCase().includes(search.toLowerCase()) ||
      el.rating.toString().includes(search)
  );
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPosterURL, setNewPosterURL] = useState('');
  const [newRating, setNewRating] = useState('');
  const addMovie = () => {
    const newMovie = {
      title: newTitle,
      description: newDescription,
      posterURL: newPosterURL,
      rating: parseFloat(newRating) 
    };
    setmovie(prevMovies => [...prevMovies, newMovie]);
    setShowModal(false);  
  };
  const isInputValid = () => {
    return newTitle && newDescription && newPosterURL && newRating;
  };

  return (
    <>
      <div>
        <div className="search_bar">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="wini"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div className="films">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((el, index) => (
            <Display
              key={index}
              title={el.title}
              description={el.description}
              posterURL={el.posterURL}
              rating={el.rating}
              
            />
            
          ))
        ) : (
          <p>Not found but you can add it if you want.</p>
        )}
              <div className="add">
              {!showModal && (
        <button className="newbtn" onClick={() => setShowModal(true)}>+</button>
      )}{showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Movie</h2>
            <input
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Movie Title"
            />
            <textarea
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
              placeholder="Description"
            />
            <input
              value={newPosterURL}
              onChange={e => setNewPosterURL(e.target.value)}
              placeholder="Poster URL"
            />
            <input
              type="number"
              step="0.1"
              value={newRating}
              onChange={e => setNewRating(e.target.value)}
              placeholder="Rating"
            />
            <button  className="btn_nez" onClick={addMovie} disabled={!isInputValid()}>Add Movie</button>
            <button className="btn_nez" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}</div>

      </div>
    </>
  );
};
export default Cardshow;
