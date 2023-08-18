function schoolGrades(input) {
  let studentObj = {};

  for (let line of input) {
    let gradeArr = line.split(" ");
    let student = gradeArr.shift();

    if (studentObj.hasOwnProperty(student)) {
      studentObj[student] = [...studentObj[student], ...gradeArr];
    } else {
      studentObj[student] = gradeArr;
    }
  }

  function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += Number(array[i]);
    }
    return sum / array.length;
  }

  for (let [key, value] of Object.entries(studentObj)) {
    studentObj[key] = average(value);
  }

  let sortArr = Object.keys(studentObj).sort((a, b) => a.localeCompare(b));

  for (let key of sortArr) {
    console.log(`${key}: ${studentObj[key].toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
