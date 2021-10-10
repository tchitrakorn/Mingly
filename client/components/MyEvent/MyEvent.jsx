import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyEventCard from './MyEventCard.jsx';

function MyEvent(props) {
    const [attendingEvents, setAttendingEvents] = useState([]);

    useEffect(() => {
        console.log('userId: ', props.userId);
        let params = {
            userId: props.userId
        };
        axios.get('/usersEvents', { params })
        .then((response) => {
            console.log(response);
            setAttendingEvents(response.data);
        })
        .catch((error) => {
            console.log('error');
        })
    });

    return (
        <div>
            <div>
                My Profile:
            </div>
            <div>
                Hosting:
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