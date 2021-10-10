import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyEvent from "../MyEvent/MyEvent.jsx";

function TopBar() {
    return (
        <div>
            Top Bar
            <div>
                <Link to="/myevent">My Event</Link>
            </div>
            <div>
                <Link to="/host">Host</Link>
            </div>
            <div>
                <Link to="/">Join</Link>
            </div>
        </div>
    );
}

export default TopBar;
