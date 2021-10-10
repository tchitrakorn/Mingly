import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyEventCard from './MyEventCard.jsx';

function MyEvent(props) {
    const [attendingEvents, setAttendingEvents] = useState([]);
    const [hostingEvents, setHostingEvents] = useState([]);

    useEffect(() => {
        console.log('userId: ', props.userId);
        let params = {
            userId: props.userId
        };

        axios.get('/usersEvents', { params })
        .then((response) => {
            setAttendingEvents(response.data);
        })
        .catch((error) => {
            console.log('error');
        })

        axios.get('/hostingEvents', { params })
        .then((response) => {
            console.log(response);
            setHostingEvents(response.data);
        })
        .catch((error) => {
            console.log('error');
        })
    });

    return (
        <div>
            <div>
                My Profile:
                <div>DEFAULT IMAGE GOES HERE</div>
                <div>Name: {props.userName}</div>
            </div>
            <div>
                Hosting:
                {hostingEvents.map((event) => (
                    <MyEventCard event={event} />
                ))}
            </div>
            <div>
                Attending:
                {attendingEvents.map((event) => (
                    <MyEventCard event={event} />
                ))}
            </div>
        </div>
    )
}

export default MyEvent;