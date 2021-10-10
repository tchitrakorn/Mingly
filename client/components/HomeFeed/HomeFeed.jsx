import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterPanel from "./FilterPanel.jsx";
import EventBoard from "./EventBoard.jsx";
import helpers from './helpers.js';

function HomeFeed() {
    const [events, setEvents] = useState([]);
    const [inperson, setInperson] = useState('');
    const [virtual, setVirtual] = useState('');
    const [groupSize, setGroupSize] = useState('');

    useEffect(() => {
        axios
            .get("/events")
            .then((response) => {
                let events = response.data;
                let filteredEvents = helpers.filterEvents(events, inperson, virtual, groupSize);
                console.log('events: ', events);
                setEvents(filteredEvents);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <div class="homefeed">
            <FilterPanel 
                setInperson={setInperson}
                setVirtual={setVirtual}
                setGroupSize={setGroupSize}
                groupSize={groupSize}/>
            <EventBoard events={events} />
        </div>
    );
}

export default HomeFeed;
