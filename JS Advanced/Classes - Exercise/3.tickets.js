function tickets(data, criteria) {
  const sortCriteria = criteria;
  let ticketsArr = [];

  class Ticket {
    constructor(destinationName, price, status) {
      this.destination = destinationName;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (let el of data) {
    const [name, price, status] = el.split("|");
    ticketsArr.push(new Ticket(name, price, status));
  }

  let sortedTickets = ticketsArr.sort((p2, p1) =>
    p1[sortCriteria] < p2[sortCriteria]
      ? 1
      : p1[sortCriteria] > p2[sortCriteria]
      ? -1
      : 0
  );

  return sortedTickets;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "price"
  )
);
