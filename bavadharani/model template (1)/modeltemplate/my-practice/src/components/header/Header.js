import '../Header.css'
import Banner from '../banner/Banner';
import Content from '../content/Content';
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, useEffect } from 'react';

function Header() {
   
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="header-part">

                        <div className="header-left">
                            <div className="small-box"></div>

                            <div className="header-name">
                                <h1>YOUR LOGO</h1>
                            </div>
                        </div>
                        <div className="nav-bar">
                            <div className="header-right">
                                <ul>
                                    <li>HOME</li>
                                    <li>ABOUT</li>
                                    <li>SERVICE</li>
                                    <li>CONTACT</li>

                                </ul>

                            </div>

                            <div className="menu-icon">
                                <GiHamburgerMenu className="menu-icon1" />
                            </div>
                        </div>

                    </div>
                </div>
                <Banner/>
                <Content />
            </div>

        </div>

    );
}
export default Header;



