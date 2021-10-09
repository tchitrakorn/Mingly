import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard.jsx';

function EventBoard() {
    const [events, setEvents] = useState('');

    useEffect(() => {
        axios.get('/events')
            .then((response) => {
                console.log(response);
            })
    });

    return (
        <div>
            EventBoard
            <EventCard />
        </div>
    )
}

export default EventBoard;