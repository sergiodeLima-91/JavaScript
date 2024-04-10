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
        // 1 - If the ticket is not in the object:
        if (tickets.hasOwnProperty(ticketId) == false) {
            return 'unknown ticket id';
        // 2 - If the ticket has a value of “null”:
        } else if (tickets[ticketId] === null) {
            return 'not sold';
        // 3 - If the ticket has a name as its value:
        } else {
            return `sold to ${tickets[ticketId]}`
        }
    }
};

export function simpleTicketStatus(tickets, ticketId) {
    for (const key in tickets) {
        // 1 - If the ticket is not in the object or if the ticket has a value of “null”:
        if (tickets.hasOwnProperty(ticketId) == false || tickets[ticketId] === null) {
            return 'invalid ticket !!!';
        // 2 - If the ticket has a name as its value:
        } else {
            return `${tickets[ticketId]}`
        }
    }
};

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
};

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };

export function gtcVersion(visitor) {
    return visitor.gtc?.version;
};

console.log(gtcVersion(visitorOld));
