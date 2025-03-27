import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link> 
      <div className="movie-card-title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
      <ul className="movie-card-genres">
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  )
}

export default Movie;

// https://yts.mx/api/v2/movie_details.json?movie_id=${id}