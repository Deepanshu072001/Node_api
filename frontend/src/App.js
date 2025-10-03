import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/edit/:id" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
