import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Registro from './pages/registro';
import NuevoProyecto from './pages/nuevo_proyecto';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/nuevo-proyecto" element={<NuevoProyecto />} />
            </Routes>
        </Router>
    );
}

export default App;
