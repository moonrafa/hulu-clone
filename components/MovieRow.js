import Movie from './Movie'
import FlipMove from 'react-flip-move'

const MovieRow = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map(result => (
        <Movie key={result.id} results={result} />
      ))}
    </FlipMove>
  )
}

export default MovieRow
