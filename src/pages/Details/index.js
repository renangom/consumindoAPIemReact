import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import { Container } from "./styles"


function Details() {

    const {id} = useParams()
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    const [movie, setMovie] = useState({})
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=08de3e09847b38781aa12283a55bdf26&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${imagePath}${data.poster_path}`,
                    releaseDate: data.release_date
                }
    
                setMovie(movie)
            })
        

    }, [id])
    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span>Release Date: {movie.releaseDate}</span>
                    <Link to="/"><button className="btn"> Go Back </button></Link>
                </div>
            </div> 
        </Container>   
    )
}

export default Details