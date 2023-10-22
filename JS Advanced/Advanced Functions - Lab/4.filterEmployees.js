function filterEmployees(input, criteria) {
  const data = JSON.parse(input);
  const [criteriaKey, criteriaValue] = criteria.split("-");

  data
    .filter((em) => em[criteriaKey] === criteriaValue)
    .map((el, i) => {
      console.log(`${i}. ${el.first_name} ${el.last_name} - ${el.email}`);
    });
}

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
