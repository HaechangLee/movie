import { Link } from "react-router-dom";
function Movie({movie}) {
return(
  <div>
    <h2>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </h2>
    <img src={movie.medium_cover_image} alt=""/>
    <div>{movie.summary === "" ? "": <p>{movie.summary.slice(0,200)}..</p>}</div>
    {
      movie.hasOwnProperty("genres") ? 
      <ul>{movie.genres.map(g => <li key={g}>{g}</li>)}</ul>:
      null
    }
  </div>
)
}

export default Movie;