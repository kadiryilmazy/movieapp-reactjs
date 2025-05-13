import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyList from "./pages/MyList/MyList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

import { HOME, MY_LIST, ROOT, MOVIE_DETAIL_WITH_ID } from "./constants/path";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route
                    path={ROOT}
                    element={<Home />}
                />
                <Route
                    path={HOME}
                    element={<Home />}
                />
                <Route
                    path={MY_LIST}
                    element={<MyList />}
                />
                <Route
                    path={MOVIE_DETAIL_WITH_ID}
                    element={<MovieDetail />}
                />
            </Routes>
        </div>
    );
}

export default App;
