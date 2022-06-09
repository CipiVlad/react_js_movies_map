const MovieCard = (props) => {
    return (
        <article>
            <p>Title: {props.title}</p>
            <p>Year: {props.year}</p>
            <p>Director: {props.director}</p>
            <p>Duration: {props.duration}</p>
            <p>Genre: {props.genre}</p>
            <p>Rate: {props.rate}</p>
        </article>);
}

export default MovieCard;