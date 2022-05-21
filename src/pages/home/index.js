import { Container, Movie, MovieList } from "./styles";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {key} from '../../api-key';

function Home(){

    const [movies, setMovies] = useState([])
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    return(
        <Container>
            <h1>Filmes Populares</h1>
            <MovieList>

                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${imagePath}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;