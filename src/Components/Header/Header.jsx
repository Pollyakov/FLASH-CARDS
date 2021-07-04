import React from 'react'
import { Link } from "react-router-dom";
import './header.css'

export default function Header() {
    return (
        <ul className= "header">
            <li> <Link to="/">STUDY</Link> </li>
            <li><Link to="/manager">MANAGE CARDS</Link></li>  
        </ul>
    )
}