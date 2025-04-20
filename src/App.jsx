import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyList from "./pages/MyList/MyList";

import { HOME, MY_LIST, ROOT } from "./constants/path";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path={ROOT} element={<Home />} />
                <Route path={HOME} element={<Home />} />

                <Route path={MY_LIST} element={<MyList />} />
            </Routes>
        </div>
    );
}

export default App;
