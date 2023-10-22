const { movieTheater } = require("./03. Movie Theater");
const { assert } = require("chai");

describe("movieTheater object", () => {
  describe("ageRestriction functionality", () => {
    it("giving G as parameter", () => {
      assert.equal(
        movieTheater.ageRestrictions("G"),
        `All ages admitted to watch the movie`,
        ""
      );
    });

    it("giving PG as parameter", () => {
      assert.equal(
        movieTheater.ageRestrictions("PG"),
        `Parental guidance suggested! Some material may not be suitable for pre-teenagers`,
        ""
      );
    });

    it("giving R as parameter", () => {
      assert.equal(
        movieTheater.ageRestrictions("R"),
        `Restricted! Under 17 requires accompanying parent or adult guardian`,
        ""
      );
    });

    it("giving NC-17 as parameter", () => {
      assert.equal(
        movieTheater.ageRestrictions("NC-17"),
        `No one under 17 admitted to watch the movie`,
        ""
      );
    });

    it("giving something else as parameter", () => {
      assert.equal(
        movieTheater.ageRestrictions("dsa"),
        `There are no age restrictions for this movie`,
        ""
      );

      assert.equal(
        movieTheater.ageRestrictions("sa"),
        `There are no age restrictions for this movie`,
        ""
      );

      assert.equal(
        movieTheater.ageRestrictions("sda"),
        `There are no age restrictions for this movie`,
        ""
      );
    });
  });

  describe("moneySpent functionality", () => {
    describe("incorrect data passed", () => {
      it("incorrect tickets data", () => {
        assert.throws(
          () => movieTheater.moneySpent("0", ["Nachos"], ["Water"]),
          "Invalid input"
        );

        assert.throws(
          () => movieTheater.moneySpent(["2", 2], ["Nachos"], ["Water"]),
          "Invalid input"
        );

        assert.throws(
          () => movieTheater.moneySpent({ tickets: 0 }, ["Nachos"], ["Water"]),
          "Invalid input"
        );
      });

      it("incorrect food data", () => {
        assert.throws(
          () => movieTheater.moneySpent(1, 1, ["Water"]),
          "Invalid input"
        );

        assert.throws(
          () => movieTheater.moneySpent(1, "1", ["Water"]),
          "Invalid input"
        );

        assert.throws(
          () => movieTheater.moneySpent(1, { food: "Nachos" }, ["Water"]),
          "Invalid input"
        );
      });

      it("incorrect drinks data", () => {
        assert.throws(
          () => movieTheater.moneySpent(1, ["Nachos"], 1),
          "Invalid input"
        );

        assert.throws(
          () => movieTheater.moneySpent(1, ["Nachos"], "1"),
          "Invalid input"
        );

        assert.throws(() =>
          movieTheater.moneySpent(
            1,
            ["Nachos"],
            { drinks: "Water" },
            "Invalid input"
          )
        );
      });
    });

    describe("correct empty data", () => {
      it("empty tickets", () => {
        assert.equal(
          movieTheater.moneySpent(0, [], []),
          `The total cost for the purchase is 0.00`
        );

        assert.equal(
          movieTheater.moneySpent(0, ["Nachos"], ["Water"]),
          `The total cost for the purchase is 7.50`
        );

        assert.equal(
          movieTheater.moneySpent(0, ["Popcorn"], ["Soda"]),
          `The total cost for the purchase is 7.00`
        );

        assert.equal(
          movieTheater.moneySpent(0, ["Nachos", "Popcorn"], ["Water", "Soda"]),
          `The total cost for the purchase is 14.50`
        );
      });

      it("empty food", () => {
        assert.equal(
          movieTheater.moneySpent(2, [], ["Water"]),
          `The total cost for the purchase is 31.50`
        );

        assert.equal(
          movieTheater.moneySpent(2, [], ["Soda"]),
          `The total cost for the purchase is 32.50`
        );

        assert.equal(
          movieTheater.moneySpent(1, [], ["Water", "Soda"]),
          `The total cost for the purchase is 19.00`
        );
      });

      it("empty drinks", () => {
        assert.equal(
          movieTheater.moneySpent(2, ["Nachos"], []),
          `The total cost for the purchase is 36.00`
        );

        assert.equal(
          movieTheater.moneySpent(1, ["Popcorn"], []),
          `The total cost for the purchase is 19.50`
        );

        assert.equal(
          movieTheater.moneySpent(
            1,
            ["Nachos", "Popcorn", "Nachos", "Popcorn"],
            []
          ),
          `The total cost for the purchase is 36.00`
        );
      });
    });

    describe("correct data ", () => {
      it("no discount", () => {
        assert.equal(
          movieTheater.moneySpent(3, [], []),
          `The total cost for the purchase is 45.00`
        );

        assert.equal(
          movieTheater.moneySpent(2, ["Nachos"], ["Water"]),
          `The total cost for the purchase is 37.50`
        );

        assert.equal(
          movieTheater.moneySpent(2, ["Popcorn"], ["Soda"]),
          `The total cost for the purchase is 37.00`
        );

        assert.equal(
          movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Water", "Soda"]),
          `The total cost for the purchase is 44.50`
        );
      });

      it("with discount", () => {
        assert.equal(
          movieTheater.moneySpent(6, [], []),
          `The total cost for the purchase with applied discount is 72.00`
        );

        assert.equal(
          movieTheater.moneySpent(4, ["Nachos"], ["Water"]),
          `The total cost for the purchase with applied discount is 54.00`
        );

        assert.equal(
          movieTheater.moneySpent(6, ["Popcorn"], ["Soda"]),
          `The total cost for the purchase with applied discount is 77.60`
        );

        assert.equal(
          movieTheater.moneySpent(3, ["Nachos", "Popcorn"], ["Water", "Soda"]),
          `The total cost for the purchase with applied discount is 47.60`
        );

        assert.equal(
          movieTheater.moneySpent(
            3,
            ["Nachos", "Popcorn", "Nachos", "Popcorn"],
            ["Water", "Soda", "Water", "Soda"]
          ),
          `The total cost for the purchase with applied discount is 59.20`
        );
      });
    });
  });

  describe("reservation functionality", () => {
    it("invalid rowsArray", () => {
      assert.throws(() => {
        movieTheater.reservation(1, 5);
      }, "Invalid input");

      assert.throws(() => {
        movieTheater.reservation("1", 5);
      }, "Invalid input");

      assert.throws(() => {
        movieTheater.reservation({ rows: 5 }, 5);
      }, "Invalid input");
    });

    it("invalid neededSeatsCount", () => {
      assert.throws(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          "5"
        );
      }, "Invalid input");

      assert.throws(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          [2, 21]
        );
      }, "Invalid input");

      assert.throws(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          { row: 2 }
        );
      }, "Invalid input");

      //   assert.throws(() => {
      //     movieTheater.reservation(
      //       [
      //         { rowNumber: 1, freeSeats: 7 },
      //         { rowNumber: 2, freeSeats: 5 },
      //       ],
      //       0
      //     );
      //   }, "Invalid input");
    });

    it("correct data", () => {
      assert.equal(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          4
        ),
        2
      );

      assert.equal(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          6
        ),
        1
      );
    });
  });
});
