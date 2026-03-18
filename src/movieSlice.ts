import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

interface Movie {
    id: number;
    title: string;
}

export interface MovieState {
    movies: Movie[];
}

const initialState: MovieState = {
    movies: [{id : 1, title:'Interstellar'}, {id: 2, title : 'Harry Potter'}]
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<string>) => {
            const lastMovie = state.movies[state.movies.length - 1];

            const nextId = lastMovie ? lastMovie.id + 1 : 1;

            state.movies.push({
                id: nextId,
                title: action.payload
            });
        },

        removeMovie: (state, action: PayloadAction<number>) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
        },
    },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;