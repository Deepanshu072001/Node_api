import React, { useEffect, useState, useCallback } from "react";
import { getContacts, deleteContact } from "../services/api";
import {getCurrentUser} from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

   //Fetch username when login is done
   const fetchUser = useCallback(async (token) => {
    try {
      const response = await getCurrentUser(token);
      setUser(response.data); // backend sends user info
    } catch (err) {
      console.error("Error fetching user:", err);
      navigate("/login");
    }
  }, [ navigate]);

  // Fetch contacts on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
       navigate("/login");
  } else {
      fetchUser(token);
      fetchContacts();
    }
  }, [ navigate, fetchUser ]);

  // Filter contacts when searchTerm or contacts change
  useEffect(() => {
    setFilteredContacts(
      contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.phone.includes(searchTerm)
      )
    );
  }, [searchTerm, contacts]);

  // Fetch contacts from backend
  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      setContacts(response.data || []); // Ensure it's an array
    } catch (err) {
      console.error(err);
    }
  };

  // Delete contact and update state immediately
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await deleteContact(id);
        // Update state locally instead of refetching
        const updatedContacts = contacts.filter((c) => c._id !== id);
        setContacts(updatedContacts);
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <header>
        <h1>Contact Dashboard</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {user && <span>👋 Hi {user.username} user</span>}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search by name, email, or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <Link to="/add">
          <button>➕ Add New Contact</button>
        </Link>
      </div>

      {filteredContacts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>No contacts found.</p>
      ) : (
        <div className="contact-grid">
          {filteredContacts.map((c) => (
            <div key={c._id} className="contact-card">
              <h3>{c.name}</h3>
              <p>Email: {c.email}</p>
              <p>Phone: {c.phone}</p>
              <div className="contact-actions">
                <Link to={`/edit/${c._id}`}>
                  <button>✏️ Edit</button>
                </Link>
                <button onClick={() => handleDelete(c._id)}>🗑 Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
