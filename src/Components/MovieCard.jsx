import { useEffect } from "react";
import Button from "./UI/Button";

export default function MovieCard({movie}){

    const url = 'https://image.tmdb.org/t/p/original'
    let movieData = {};

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTJlMTcyYjBmNjMyNmQ4MWVmZjYyYTZiYjdlOGRiNyIsInN1YiI6IjY1N2Q3MTRlYjdmYmJkMDZlNDMwMzM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUJ9QWU1OkV9lMDZwx2TgKWIMGYgeWKcTwaaQWZ1tVc'
        }
    };

    async function getMovieData(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}`, options)
        movieData = await response.json();
        console.log(movieData)
    }

    

    return (
        <div className="movie-container">
            <img className="movie-poster" src={url + movie.poster_path} alt="Jaws movie poster"/>
            <h3>{movie.title}</h3>
            <p>{movieData.overview}</p>
            <Button textOnly>View</Button>
        </div>
    )
}
