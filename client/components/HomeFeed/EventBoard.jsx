import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard.jsx';

function EventBoard(props) {
    return (
        <div>
            EventBoard
            {props.events.map(event => <EventCard event={event} />)}
        </div>
    )
}

export default EventBoard;