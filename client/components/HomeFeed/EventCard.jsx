import React, { useState, useEffect } from "react";
import axios from "axios";

function EventCard(props) {
    const [joinable, setJoinable] = useState(true);

    let joinText = 'Join';
    if (joinable === false) {
        joinText = 'Joined. Cancel?'
    }
    
    const handleJoin = (e) => {
        let data = {
            userId: props.userId,
            eventId: props.event.id
        }
        axios.post('/joinEvent', data)
            .then((response) => {
                console.log(response);
                setJoinable(!joinable);
            })
            .catch((error) => {
                console.log('error');
            });
    }

    return (
        <div className="event-card">
            <div class="card-title">{props.event.title}</div>
            <div>
                <p class="event-card-title">Host: </p>
                {props.event.host}
            </div>
            <div>
                <span class="material-icons">schedule</span>
                {props.event.date} {props.event.time}{" "}
                <span class="material-icons">place</span>
                {props.event.location}{" "}
                <span class="virtual-tab">{props.event.mode}</span>
            </div>
            <div>{props.event.description}</div>

            <div class="card-corner">
                {/* <button>Join</button> */}
                <button type="button" onClick={handleJoin}>
                    {joinText}
                </button>
                {props.event.joined}/{props.event.groupsize}
            </div>
        </div>
    );
}

export default EventCard;
