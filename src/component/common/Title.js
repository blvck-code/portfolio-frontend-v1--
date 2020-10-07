import React from "react";

export default function Title({ num, title }) {
  return (
    <div className="title">
      <h2>
        <span className="text-secondary">{num}</span>
        {title}
        <div className="h-line"></div>
      </h2>
    </div>
  );
}
