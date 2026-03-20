let attendee = {
    attendeeId : "T001"
    name : "Alice Smith"
    event : "JavaScript Conference"
    ticketType : "VIP"
    ticketPrice : 150.00
}

function logAttendeeName(attendee) {
    console.log("Attendee Name: " + attendee.name);
}

log ticketPrice(attendee) {
    console.log("Ticket Price: $" + attendee.ticketPrice);
}

function updateTicketType(attendee, newType) {
    attendee.ticketType = newType;
    console.log("Updated Ticket Type: " + attendee.ticketType);
}

function updateTicketPrice(attendee, newPrice) {
    attendee.ticketPrice = newPrice;
    console.log("Updated Ticket Price: $" + attendee.ticketPrice);
}

function removeEventProperty(attendee) {
    delete attendee.event;
    console.log("Event property removed. Current attendee object: ", attendee);
}

function addCheckInProperty(attendee) {
    attendee.checkInStatus = "False";
    console.log("Check-in status added. Current attendee object: ", attendee);
}