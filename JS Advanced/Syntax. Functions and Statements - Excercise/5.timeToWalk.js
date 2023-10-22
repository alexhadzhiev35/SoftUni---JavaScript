function time(stepsCount, footprintLength, studentSpeed) {
  let distance = stepsCount * footprintLength;
  let speedMetersInSeconds = studentSpeed / 3.6;
  let time = distance / speedMetersInSeconds;
  let res = Math.floor(distance / 500);

  let timeInMin = Math.floor(time / 60);
  let timeInSec = time - timeInMin * 60;

  let hours = Math.floor(timeInMin / 60);

  let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
  let minToPrint = (timeInMin % 60) + res;
  minToPrint = minToPrint < 10 ? `0${minToPrint}` : `${minToPrint}`;
  let secToPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

  console.log(`${hoursToPrint}:${minToPrint}:${Math.round(secToPrint)}`);
}

time(4000, 0.6, 5);
