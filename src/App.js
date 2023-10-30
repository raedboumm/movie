import React, { useState } from "react";
import Cardshow from "./Cardshow";
import "./style.css";
import popcorn from "./popcorn.png";
import { Routes, Route, Link } from "react-router-dom";
import OneMovie from "./OneMovie";

const App = () => {
  const [movie, setmovie] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg",
      rating: 9.3,
      trailer: <iframe className="video" width="1200" height="600" src="https://www.youtube.com/embed/NmzuHjWmXOc?si=NUZZcBOV6XzWGABw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 9.2,
      trailer :<iframe className="video" width="1200" height="600" src="https://www.youtube.com/embed/UaVTIH8mujA?si=YBEItuHs1bkLS0ws" title="YouTube video player" frameborder="0"  allow="accelerometer; muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      title: "Inception",
      description:
        "A thief who enters the dreams of others to steal secrets leads a team on an intricate heist of a lifetime.",
      posterURL:
        "https://m.media-amazon.com/images/I/61xzvfJiNkL._AC_UF894,1000_QL80_.jpg",
      rating: 8.8,
      trailer: <iframe  className='video' width="1200" height="600" src="https://www.youtube.com/embed/YoHD9XEInc0?si=rviZBMek9XvVdfAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      posterURL:
        "https://m.media-amazon.com/images/I/41Al9falobL._AC_UF894,1000_QL80_.jpg",
      rating: 8.8,
      trailer: <iframe className="video"  width="1200" height="600" src="https://www.youtube.com/embed/bLvqoHBptjg?si=LgGyFhzZHcXFJyOf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      title: "The Matrix",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: 8.7,
      trailer: <iframe className="video" width="1200" height="600" src="https://www.youtube.com/embed/vKQi3bBA1y8?si=8E45VBpmZsIHk006" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      description:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 8.7,
      trailers: <iframe className="video" width="1200" height="600" src="https://www.youtube.com/embed/JNwNXF9Y6kY?si=EiH2d9ClgoO16R8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://rukminim2.flixcart.com/image/850/1000/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8euacqngyh.jpeg?q=20",
      rating: 9.0,
      trailers :<iframe className="video" width="1200" height="600" src="https://www.youtube.com/embed/EXeTwQWrcwY?si=3mHT2R8dHQyziEch" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },

    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
      posterURL: "https://m.media-amazon.com/images/I/81sZU-iKNGL.jpg",
      rating: 8.8,
      trailer:<iframe className="video" width="1200" height="600" src="https://www.youtube.com/embed/BdJKm16Co6M?si=CY87Y8jRCtwiCWnD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL: "https://m.media-amazon.com/images/I/81j0OkNZ05L.jpg",
      rating: 8.9,
      trailer:<iframe  className="video" width="1200" height="600" src="https://www.youtube.com/embed/tGpTpVyI_OQ?si=f7KSTElsIXS76m_p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      posterURL:
        "https://www.themoviedb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      rating: 9.0,
      trailer:<iframe className="video" width="1200" height="600" src="https://www.youtube.com/embed/gG22XNhtnoY?si=lciEXIlUVlY_qZfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
  ]);
  const [cnd, setcnd] = useState(true);
  return (
    <div className="outside">
      <div className="popcorn">
        <img src={popcorn} alt="popcorn" />
      </div>

      <div className="popcorntwo">
        <img src={popcorn} alt="popcorn" />
      </div>

      <div className="center">
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/movie">
                {" "}
                <button className="btn">Cinema ticket 🎞️</button>{" "}
              </Link>
            }
          />

          <Route
            path="/movie/"
            element={<Cardshow movie={movie} setmovie={setmovie} />}
          />
          <Route path="/movie/:name" element={<OneMovie movie={movie} />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
