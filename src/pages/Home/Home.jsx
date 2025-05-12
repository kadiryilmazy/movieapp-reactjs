import React, { useState } from "react";
import Genre from "../../components/Genre/Genre";
import MovieList from "../../components/MovieList/MovieList";
export default function Home() {
    const [selectedGenre, setSelectedGenre] = useState(null);
    return (
        <div className="home">
            <Genre
                setSelectedGenre={setSelectedGenre}
                selectedGenre={selectedGenre}
            />
            <MovieList selectedGenre={selectedGenre} />
        </div>
    );
}
