// src/components/Sidebar.jsx
import React from "react";

const icons = {
  Home: "🏠",
  Monuments: "🏛️",
  Backwaters: "🌊",
  "Caves & Temples": "🛕",
  Yoga: "🧘",
  Cuisine: "🍽️",
  Festivals: "🎉",
  All: "📌",
};

export default function Sidebar({ topics = [], active = "All", onSelectTopic = () => {}, onLogout = () => {} }) {
  return (
    <div className="sidebar">
      <div className="brand">
        <div className="logo">KH</div>
        <div>
          <div style={{ fontWeight: 700, color: "#214a6b" }}>Indian Heritage</div>
          <div style={{ fontSize: 13, color: "#6b8aa2" }}>Discover & Explore</div>
        </div>
      </div>

      <div style={{ padding: "8px 0 6px 4px", color: "#5b6b7a", fontSize: 14 }}>Topics</div>

      <div style={{ marginTop: 6 }}>
        {topics.map((t) => {
          const isActive = t === active;
          return (
            <div
              key={t}
              onClick={() => onSelectTopic(t)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 8,
                cursor: "pointer",
                marginBottom: 8,
                background: isActive ? "rgba(31,142,214,0.12)" : "transparent",
                color: isActive ? "#063b63" : "#234a62",
                fontWeight: isActive ? 700 : 500,
              }}
            >
              <span style={{ width: 28, textAlign: "center" }}>{icons[t] || "📍"}</span>
              <span>{t}</span>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 22 }}>
        <button onClick={onLogout} style={{ width: "100%", padding: 10, borderRadius: 8, border: "none", background: "#eee", cursor: "pointer" }}>
          Logout
        </button>
      </div>
    </div>
  );
}
