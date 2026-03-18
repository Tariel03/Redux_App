import {useSelector} from "react-redux";
import type {RootState} from "../store.ts";

export default function MovieList() {
    const movies = useSelector((state: RootState) => state.movies.movies)
    return (
        <div>
            <h1>Movie List!</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <p>{movie.title}</p>
                </div>
            ))}

        </div>
    )
}
