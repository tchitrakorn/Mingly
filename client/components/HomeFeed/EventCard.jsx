import React from "react";

function EventCard(props) {
    return (
        <div className="event-card">
            <div class="card-title">{props.event.title}</div>
            <div>
                <p class="event-card-title">Host: </p>
                {props.event.host}
            </div>
            <div>
                <span class="material-icons">schedule</span> 2021-10-4 6:30{" "}
                <span class="material-icons">place</span>
                {props.event.location} ({props.event.mode})
            </div>
            <div>{props.event.description}</div>

            <div class="card-corner">
                <button>Join</button>
                {props.event.joined}/{props.event.groupSize}
            </div>
        </div>
    );
}

export default EventCard;
