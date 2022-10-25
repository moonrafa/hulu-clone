import Head from 'next/head'
import Header from '../components/Header'
import MovieRow from '../components/MovieRow'
import Nav from '../components/Nav'
import requests from '../utils/requests'

//client side rendering
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title> Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <MovieRow results={results} />
    </div>
  )
}

//server side rendering

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  )
    .then(res => res.json())
    .catch(err => console.log(err.message))
  return {
    props: { results: request.results }
  }
}
