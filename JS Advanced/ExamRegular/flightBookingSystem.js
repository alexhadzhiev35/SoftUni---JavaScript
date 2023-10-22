class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    let foundFlight = this.flights.find(
      (el) => el.flightNumber === flightNumber
    );

    if (foundFlight) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    } else {
      this.flights.push({ flightNumber, destination, departureTime, price });
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
  }

  bookFlight(passengerName, flightNumber) {
    let foundFlight = this.flights.find(
      (el) => el.flightNumber === flightNumber
    );

    if (!foundFlight) {
      return `Flight ${flightNumber} is not available for booking.`;
    } else {
      this.bookings.push({ passengerName, flightNumber });
      this.bookingsCount++;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }
  }

  cancelBooking(passengerName, flightNumber) {
    let foundBooking = this.bookings.find(
      (el) =>
        el.passengerName === passengerName && el.flightNumber === flightNumber
    );

    if (!foundBooking) {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    } else {
      this.bookings = this.bookings.filter(
        (el) =>
          el.passengerName !== passengerName && el.flightNumber !== flightNumber
      );
      this.bookingsCount--;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }
  }

  showBookings(criteria) {
    if (this.bookings.length === 0) {
      throw new Error(`No bookings have been made yet.`);
    }

    if (criteria === "all") {
      let res = [`All bookings(${this.bookingsCount}):`];

      this.bookings.forEach((booking) =>
        res.push(
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        )
      );

      return res.join("\n");
    }

    if (criteria === "cheap") {
      let cheapBookings = [];

      let cheapFlightsNames = [];
      let cheapFlights = this.flights
        .filter((flight) => flight.price <= 100)
        .forEach((flight) => cheapFlightsNames.push(flight.flightNumber));

      for (let booking of this.bookings) {
        if (cheapFlightsNames.includes(booking.flightNumber)) {
          cheapBookings.push(booking);
        }
      }

      if (cheapBookings.length === 0) {
        return "No cheap bookings found.";
      } else {
        let res = ["Cheap bookings:"];
        cheapBookings.forEach((booking) =>
          res.push(
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
          )
        );
        return res.join("\n");
      }
    }

    if (criteria === "expensive") {
      let expensiveBookings = [];

      let expensiveFlightsNames = [];
      let expensiveFlights = this.flights
        .filter((flight) => flight.price > 100)
        .forEach((flight) => expensiveFlightsNames.push(flight.flightNumber));

      for (let booking of this.bookings) {
        if (expensiveFlightsNames.includes(booking.flightNumber)) {
          expensiveBookings.push(booking);
        }
      }

      if (expensiveBookings.length === 0) {
        return "No expensive bookings found.";
      } else {
        let res = ["Expensive bookings:"];
        expensiveBookings.forEach((booking) =>
          res.push(
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
          )
        );
        return res.join("\n");
      }
    }
  }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// /*
//  Flight AA101 to Los Angeles has been added to the system.
//   Flight BB202 to New York has been added to the system.
//   Flight CC303 to Chicago has been added to the system.
//   Flight AA101 to Los Angeles is already available.
// */

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "New York", "10:30 AM", 80));
// console.log(system.addFlight("CC404", "New York", "10:30 AM", 10));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Cop", "CC303"));
// console.log(system.showBookings("expensive"));
// console.log(system.showBookings("cheap"));

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
