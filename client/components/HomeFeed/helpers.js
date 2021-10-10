const filterEvents = (events, inPerson, virtual, groupSize) => {
    let filteredEvents = [];
    for (let i = 0; i < events.length; i++) {
        let event = events[i];
        if (inPerson && event.mode === 'in-person') {
            filteredEvents.push(event);
        } else if (virtual && event.mode === 'virtual') {
            filteredEvents.push(event);
        }
        if (groupSize !== '' && event.groupsize <= groupSize) {
            filteredEvents.push(event);
        }
    }
    return filteredEvents;
}

module.exports = {
    filterEvents
};