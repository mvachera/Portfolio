import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Accueil from "./pages/Accueil";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
