import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';

function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [Detail, setDetail] = useState([]);


  const getMovieDetail = async() => {
    // const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const response = await axios.get(`/v2/movie_details.json?movie_id=${id}`);
    setDetail(response.data.data);
    setLoading(false);
  }
  useEffect(() => {
    getMovieDetail();
  }, [])
  

  console.log(Detail)
  
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        <div><Link to="../"><button>gohome</button> </Link></div>
          <h1>{Detail.movie.title}</h1>
          <img src={Detail.movie.medium_cover_image} alt=""/>
          <div>{Detail.movie.description_full}</div>
          <p>Genres</p>
          {
            Detail.movie.hasOwnProperty("genres") ? 
            <ul>{Detail.movie.genres.map(g => <li key={g}>{g}</li>)}</ul>:
            null
          }
      </div>
      }
    </div>
  )
  //return (null)
}

export default Detail