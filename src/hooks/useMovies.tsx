import { useEffect, useState } from "react";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";
import movieDb from "../api/movieDB";

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDb.get<MovieDBNowPlaying>("/now_playing");
    setPeliculasEnCine(resp.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
  };
};
