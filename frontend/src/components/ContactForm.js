import React, { useState, useEffect } from "react";
import { addContact, updateContact, getContacts } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      if (!id) return;

      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await getContacts();
        const contact = response.data.find((c) => c._id === id);
        setForm(contact || { name: "", email: "", phone: "" });
      } catch (err) {
        console.error(
          "Error fetching contact:",
          err.response?.data || err.message
        );
        setForm({ name: "", email: "", phone: "" });
      }
    };
    fetchContact();
  }, [id, navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    try {
      if (id) {
        await updateContact(id, form);
      } else {
        await addContact(form);
      }

      // After add/update, go back to ContactList and trigger re-fetch
      navigate("/", { state: { refresh: true } });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save contact");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {id ? "Edit Contact" : "Add Contact"}
      </h2>
      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {id ? "Update Contact" : "Add Contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
