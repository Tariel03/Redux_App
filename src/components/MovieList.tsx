import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "../store.ts";
import {removeMovie} from "../movieSlice.ts";

export default function MovieList() {
    const movies = useSelector((state: RootState) => state.movies.movies)
    const dispatch = useDispatch();
    const deleteMovie = (id: number) => {
        dispatch(removeMovie(id));
    }
    return (
        <div>
            <h1>Movie List!</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <p>{movie.title}</p>
                    <button onClick={ () => deleteMovie(movie.id)}> Delete movie!</button>
                </div>
            ))}

        </div>
    )
}
