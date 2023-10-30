import React, { useState } from "react";
import Display from "./Display";

const Cardshow = ({movie,setmovie}) => {
 
  const [search, setSearch] = useState("");

  const filteredMovies = movie.filter(
    (el) =>
      el.title.toLowerCase().includes(search.toLowerCase()) ||
      el.rating.toString().includes(search)
  );

  const [showModal, setShowModal] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPosterURL, setNewPosterURL] = useState("");
  const [newRating, setNewRating] = useState("");
  const addMovie = () => {
    const newMovie = {
      title: newTitle,
      description: newDescription,
      posterURL: newPosterURL,

      rating: parseFloat(newRating),
    };
    setmovie((prevMovies) => [...prevMovies, newMovie]);
    setShowModal(false);
    setNewTitle("");

    setNewRating("");
    setNewPosterURL("");
    setNewDescription("");
  };
  const isInputValid = () => {
    return newTitle && newDescription && newPosterURL && newRating;
  };
  return (
    <>
      <div className="all" >
        
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
            <button className="newbtn" onClick={() => setShowModal(true)}>
              +
            </button>
          )}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Add New Movie</h2>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Movie Title"
                />
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Description"
                />
                <input
                  value={newPosterURL}
                  onChange={(e) => setNewPosterURL(e.target.value)}
                  placeholder="Poster URL"
                />
                <input
                  type="number"
                  step="0.1"
                  value={newRating}
                  onChange={(e) => setNewRating(e.target.value)}
                  placeholder="Rating"
                />
                <button
                  className="btn_nez"
                  onClick={addMovie}
                  disabled={!isInputValid()}
                >
                  Add Movie
                </button>
                <button className="btn_nez" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
};
export default Cardshow;
