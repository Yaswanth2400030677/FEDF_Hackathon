// src/components/IndiaMap.jsx
import React from "react";

/**
 * Simple IndiaMap — clickable regions mapped to topics.
 * This is a stylized set of clickable badges that act as a lightweight "map".
 * If you later want a real SVG map, I can provide one.
 */
export default function IndiaMap({ onSelectRegion = () => {} }) {
  const regions = [
    { id: "north", label: "North (Monuments)", topic: "Monuments" },
    { id: "south", label: "South (Backwaters)", topic: "Backwaters" },
    { id: "west", label: "West (Caves & Temples)", topic: "Caves & Temples" },
    { id: "rishikesh", label: "Rishikesh (Yoga)", topic: "Yoga" },
    { id: "food", label: "Cuisine", topic: "Cuisine" },
    { id: "fest", label: "Festivals", topic: "Festivals" },
  ];

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {regions.map((r) => (
        <button
          key={r.id}
          onClick={() => onSelectRegion(r.topic)}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            color: "#fff",
            cursor: "pointer",
            whiteSpace: "nowrap",
            fontWeight: 600,
          }}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
