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
    let keys = Object.keys(tickets);
    let values = Object.values(tickets);

    if (tickets.hasOwnProperty(ticketId) == false) {
        return 'unknown ticked id'
    } if (tickets[values[1] == values[1]]) {
        return `sold to ${values[1]}`;
    }
}

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };

console.log(ticketStatus(tickets, '23LA9T41'));
