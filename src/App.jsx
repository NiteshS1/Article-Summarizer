import { Routes, Route, Navigate } from "react-router-dom";

import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Login from "./components/login-form";
import Signup from "./components/signup-form";

import "./App.css";

const Home = () => (
  <>
    <Hero />
    <Demo />
  </>
);

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Routes>
          {/* Redirect root to /signup */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
};

// $ git clone https://github.com/esadakman/reactjs-ai-summarizer

export default App;
