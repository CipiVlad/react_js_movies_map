import movies from "../data";
import MovieCard from "./MovieCard"
const MovieList = () => {
    return (
        <section>
            {movies.map((movie, key) =>
                <MovieCard
                    key={key}
                    title={movie.title}
                    year={movie.year}
                    director={movie.director}
                    duration={movie.duration}
                    genre={movie.genre}
                    rate={movie.rate}
                />
            )}
        </section>
    );
}

export default MovieList;