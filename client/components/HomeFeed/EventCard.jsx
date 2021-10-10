import React from 'react';

function EventCard(props) {
    return (
        <div className="event-card">
            EventCard
            <div>Title: {props.event.title}</div>
            <div>Host: {props.event.host}</div>
            <div>Mode: {props.event.mode}</div>
            <div>Location: {props.event.location}</div>
            <div>Description: {props.event.description}</div>
            <div>Expected group size: {props.event.groupSize}</div>
            <div>Currently joined: {props.event.joined}</div>
        </div>
    )
}

export default EventCard;