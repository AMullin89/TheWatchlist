import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MovieCard from './Components/MovieCard';
import SignUp from './Components/SignUp';
import UserProgressContext, { UserProgressContextProvider } from './Components/store/UserProgressContext';
import SignIn from './Components/SignIn';


function App() {

  const [movies, setMovies] = useState([]);

  async function getMovies(){

   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTJlMTcyYjBmNjMyNmQ4MWVmZjYyYTZiYjdlOGRiNyIsInN1YiI6IjY1N2Q3MTRlYjdmYmJkMDZlNDMwMzM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUJ9QWU1OkV9lMDZwx2TgKWIMGYgeWKcTwaaQWZ1tVc'
    }
};

const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', options)
const films = await response.json();

 setMovies(films.results)
  
  }

 

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <UserProgressContextProvider>
      <Header/>
      <h2>Popular Movies</h2>
      <div id="movies">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
      <SignUp />
      <SignIn />
    </UserProgressContextProvider>

  );
}

export default App;
