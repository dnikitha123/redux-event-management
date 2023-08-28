import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/add" className="navbar-brand">
            Event App
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Event
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-link">
                Event List
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add" element={<EventForm />} />
          <Route path="/list" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
