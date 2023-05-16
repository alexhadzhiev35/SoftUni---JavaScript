function clock() {
  for (let hours = 0; hours < 24; hours++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        console.log(`${hours}:${min}:${sec}`);
      }
    }
  }
}
clock();
