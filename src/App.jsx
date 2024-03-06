import { useEffect, useState } from "react";

import { MagnifyingGlass } from "phosphor-react";
import Moviee from "./components/Moviee";
// c6c4c7f3
// aPI KEYS
const movie1 = {
  Title: "Mod Fuck Explosion",
  Year: "1994",
  imdbID: "tt0107587",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDY1OTMwNDg0OF5BMl5BanBnXkFtZTcwNzk1MTcyMQ@@._V1_SX300.jpg",
};

const API_URL = "http://www.omdbapi.com?apikey=c6c4c7f3";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchitem, setsearchitem] = useState("");
  const search_movie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    search_movie("fuck");
  }, []);

  return (
    <div className="bg-black text-white">
      <h1 className="text-xl items-center flex justify-center py-4 font-semibold ">
        TopherMovies
      </h1>
      <div className="flex justify-center items-center ">
        <div className="flex outline-none">
          <input
          className="text-black rounded-full p-2"
            placeholder="Search for movies"
            value={searchitem}
            onChange={(e) => setsearchitem(e.target.value)}
          />
          <MagnifyingGlass
            size={20}
            className="m-2 hover:cursor-pointer"
            onClick={() => search_movie(searchitem)}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
          {movies.map((movie) => (
            <Moviee movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
