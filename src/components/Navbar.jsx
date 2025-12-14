import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({ options }) {
    const navigate =useNavigate()
  return (
    <div className="outer">
      <div className="first">
        <h1 className="nav">The Apparels</h1>
      </div>
      <div className="second">
        {options.map((opt) => (
          <div className="opt">
            <h2 onClick={()=> navigate(`${opt.link}`)}>{opt.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
