import {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { initLabelAnimations } from "./labelAnimations";
import { validateInputAnimation } from "./validateInputAnimation";
import "./index.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const inputs = [
    { input: "username", label: "usernameLabel", button: "loginButton" },
    { input: "password", label: "passwordLabel", button: "loginButton" },
  ];

  useEffect(() => {
    initLabelAnimations(inputs);
    validateInputAnimation(inputs);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const accountData = {
      username,
      password,
    };
    try {
      const response = await fetch("api/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accountData),
      });

      if(!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      if(data.success) {
        sessionStorage.setItem('username', data.username);
        navigate(`/menu`);
      } else {
        setError("Nieprawidłowa nazwa użytkownika lub hasło");
      }
    } catch (error) {
      setError("ERROR: ", error);
    }
  }
  return (
    <div id="container">
      <h1>Zaloguj się</h1>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" id="usernameLabel" style={styles.label}>
          Nazwa użytkownika
        </label>
        <input type="text" name="username"
               id="username" style={styles.input}
               value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password" id="passwordLabel" style={styles.label}>
          Hasło
        </label>
        <input
          type="password"
          name="password"
          id="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          Zaloguj
        </button>
      </form>
      <Link to ="/create-user" style={styles.link}>
          Dodaj użytkownika
        </Link>
    </div>
  );
}

const styles = {
  button: {
    cursor: "pointer",
    position: "relative",
    top: "30px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid black",
    backgroundColor: " #c8c8c8",
  },
  link: {
    display: "inline",
    color: "whitesmoke",
    position: "relative",
    top: "60px",
    right: "-30px",
    textAlign: "right",
  },
  error: {
    color: "red",
    marginTop: "20px",
  }
};
