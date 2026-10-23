
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f0f5fc",
      display: "grid",
      placeItems: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        background: "#fff",
        padding: "35px",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 10px 35px #12315c15"
      }}>
        <h1 style={{ color: "#1266db", marginTop: 0 }}>
          NOVIRE
        </h1>
        <h2>Admin Panel</h2>
        <p style={{ color: "#64748b" }}>
          Sign-in page for Novire website administrators.
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Login is not connected yet. We will set up secure authentication next.");
        }}>
          <label htmlFor="email">Admin email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
            placeholder="Enter your password"
          />

          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
        </form>

        <p style={{ color: "#64748b", fontSize: "12px" }}>
          Authorized administrators only.
        </p>
      </section>
    </main>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "12px",
  margin: "8px 0 18px",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  fontSize: "15px"
};

const buttonStyle = {
  width: "100%",
  padding: "13px",
  border: "none",
  borderRadius: "8px",
  background: "#1266db",
  color: "white",
  fontWeight: "bold" as const,
  fontSize: "15px",
  cursor: "pointer"
};
