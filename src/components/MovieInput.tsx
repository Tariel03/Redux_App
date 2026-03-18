import {useState} from "react";
import {addMovie} from "../movieSlice.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../store.ts";

export default function MovieInput(){
    const [newMovie, setNewMovie] = useState("")
    const dispatch = useDispatch<AppDispatch>();
    const handleAddMovie = () => {
        if(newMovie){
            dispatch(addMovie(newMovie));
            setNewMovie("");
        }

    }
    return (
        <>
            <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie}/>
            <button onClick = {handleAddMovie}>Add movie</button>
        </>
    )
}
