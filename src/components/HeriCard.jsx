// src/components/HeriCard.jsx
import React from "react";

export default function HeriCard({ id, title, desc, img, onClick = () => {} }) {
  return (
    <div className="heritage-card" style={{ cursor: "pointer" }} onClick={() => onClick()}>
      <div className="thumb" style={{ backgroundImage: `url(${img})` }} />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: "6px 0 0", color: "#4d657f" }}>{desc}</p>
      </div>
    </div>
  );
}
