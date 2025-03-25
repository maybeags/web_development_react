function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <a href="/"><h2>{title}</h2></a>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (<li key={genre}>{genre}</li>))}
      </ul>
    </div>
  )
}

export default Movie;

// https://yts.mx/api/v2/movie_details.json?movie_id=${id}