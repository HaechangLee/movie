import { useEffect, useState } from "react";
import axios from 'axios';
import Movie from '../components/Movie';
import style from './common.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    // const response = await axios.get('/v2/list_movies.json?minimum_rating=9&sort_by=year');
    setMovies(response.data.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
          {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
      </div>
      }
    </div>  
  );
}

export default Home;