import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Gender, setGender] = useState("");

  const navigate = useNavigate(); // For redirecting

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/profile", {
      state: { FirstName, LastName, Email, Birthday, PhoneNumber, Gender },
    });
  };

  return (
    <>
      <h1>1. Personal Information</h1>
      <h3>About Me</h3>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          placeholder="Birthday"
          onChange={(e) => setBirthday(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
