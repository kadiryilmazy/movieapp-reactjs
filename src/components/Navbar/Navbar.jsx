import React from "react";
import "./Navbar.css";
import { PiFilmReelFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <h1>MovieApp</h1>
            </div>
            <div className="center">
                <PiFilmReelFill />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <TiHome />
                    </li>
                    <li>
                        <FaHeart />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
