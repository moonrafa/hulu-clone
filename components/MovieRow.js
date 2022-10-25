import Movie from './Movie'

const MovieRow = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <Movie key={result.id} results={result} />
      ))}
    </div>
  )
}

export default MovieRow
