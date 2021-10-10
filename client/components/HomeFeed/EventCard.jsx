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
                <span class="material-icons">schedule</span>
                {props.event.date} {props.event.time}{" "}
                <span class="material-icons">place</span>
                {props.event.location}{" "}
                <span class="virtual-tab">{props.event.mode}</span>
            </div>
            <div>{props.event.description}</div>

            <div class="card-corner">
                <button>Join</button>
                {props.event.joined}/{props.event.groupsize}
            </div>
        </div>
    );
}

export default EventCard;
