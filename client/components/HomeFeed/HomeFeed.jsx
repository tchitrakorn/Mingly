import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterPanel from './FilterPanel.jsx';
import EventBoard from './EventBoard.jsx';

function HomeFeed() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/events')
            .then((response) => {
                console.log('response: ', response)
                setEvents(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    });

    const handleFilters = () => {
        
    };

    return (
        <div>
            HomeFeed
            <FilterPanel />
            <EventBoard events={events}/>
        </div>
    )
}

export default HomeFeed;