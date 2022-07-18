import React from "react";
import "./style.css";
import { GiWorld } from "react-icons/gi";

export default function Header() {
  return (
    <header className="header-container">
      <GiWorld size={30} />
      <p>my travel journal</p>
    </header>
  );
}
