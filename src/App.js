import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Models from "./pages/Models"
import Tutorial from "./pages/Tutorial"
import Quiz from "./pages/Quiz"
import NotFound from "./pages/NotFound"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/models" element={<Models />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
