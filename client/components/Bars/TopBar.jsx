import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyEvent from "../MyEvent/MyEvent.jsx";

function TopBar() {
    return (
        <nav>
            <div class="menu-wrapper">
                <div class="menu-div">
                    <span>Welcome, Tattie!</span>
                    <span class="material-icons">
                        emoji_people emoji_people emoji_people emoji_people
                        emoji_people
                    </span>
                    <div class="menu-right">
                        <div>
                            <Link to="/myevent">
                                <a>My Events</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="/host">
                                <a>Host</a>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <a>Join</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;
