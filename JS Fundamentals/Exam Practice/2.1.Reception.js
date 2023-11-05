function reception(input) {
  let employee1 = Number(input[0]);
  let employee2 = Number(input[1]);
  let employee3 = Number(input[2]);
  let totalStudents = Number(input[3]);

  let studentsPerHour = employee1 + employee2 + employee3;
  let hoursCount = 0;

  while (totalStudents > 0) {
    hoursCount++;
    totalStudents -= studentsPerHour;

    if (hoursCount % 4 === 0) {
      hoursCount++;
    }
  }

  console.log(`Time needed: ${hoursCount}h.`);
}
reception(["1", "2", "3", "45"]);
