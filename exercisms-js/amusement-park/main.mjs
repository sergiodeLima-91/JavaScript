export function createVisitor(name, age, ticketId) {
    let visitorData = {
        name: name,
        age: age,
        ticketId: ticketId,
    }

        return visitorData;
};

export function revokeTicket(visitor) {
    visitor.ticketId = null;

    return visitor;
};

export function ticketStatus(tickets, ticketId) {
    for (const key in tickets) {
        if (tickets.hasOwnProperty(ticketId) == false) {
            return 'unknown ticket id';
        } else if (tickets[ticketId] === null) {
            return 'not sold';
        } else {
            return `sold to ${tickets[ticketId]}`
        }
    }
};

const tickets = {
    'V42NWRMQ': null,
};

console.log(ticketStatus(tickets, 'V42NWRMQ'));
