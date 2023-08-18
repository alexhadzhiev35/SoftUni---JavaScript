function seq(arr) {
  let sequence = 1;
  let maxSequence = 0;
  let maxSequenceNum = 0;

  for (let index = 0; index < arr.length; index++) {
    if (index !== 0) {
      let curNum = Number(arr[index]);
      let prevNum = Number(arr[index - 1]);

      if (curNum === prevNum) {
        sequence++;

        if (sequence > maxSequence) {
          maxSequence = sequence;
          maxSequenceNum = curNum;
        }
      } else {
        sequence = 1;
      }
    }
  }
  console.log(`${(maxSequenceNum + " ").repeat(maxSequence)}`);
}
seq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
