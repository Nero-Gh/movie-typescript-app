import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
      <div className="w-5/6 mx-auto my-16 ">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:id" element={<MovieDetailPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
