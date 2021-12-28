import React from "react";
import "./Nav.css"
import { NavLink, Link } from "react-router-dom";

import Button from "../../components/Button/Button";

const Nav = () => {
    return (
        <section className='navContainer'>
            <ul className='navList-left'>
                <li><NavLink to="/Productos"><Button content="Productos" /></NavLink></li>
                <li><NavLink to="/IManualidades"><Button content="Insumos Manualidades" /></NavLink></li>
            </ul>
            <Link to="/" id='homeLogo' />
            <ul className='navList-right'>
                <li><NavLink to="/IScrapBooking"><Button content="Insumos ScrapBooking" /></NavLink></li>
                <li><NavLink to="/Contacto"><Button content="Contacto" /></NavLink></li>
            </ul>
        </section>
    )
}
export default Nav;