import React from "react";

export default function GameOverModal({ message, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ color: "black" }}>Game Over</h2>
        <p style={{ color: "black" }}>{message}</p>
        <button
          onClick={onClose}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            background: "black",
            color: "#fff",
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
