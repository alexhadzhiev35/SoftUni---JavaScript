function attachEventsListeners() {
  const daysInput = document.getElementById("days");
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  const daysBtn = document.getElementById("daysBtn");
  const hoursBtn = document.getElementById("hoursBtn");
  const minutesBtn = document.getElementById("minutesBtn");
  const secondsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", () => {
    days = Number(daysInput.value);

    hoursInput.value = days * 24;
    minutesInput.value = days * 24 * 60;
    secondsInput.value = days * 24 * 60 * 60;
  });

  hoursBtn.addEventListener("click", () => {
    hours = Number(hoursInput.value);

    daysInput.value = hours / 24;
    minutesInput.value = hours * 60;
    secondsInput.value = hours * 60 * 60;
  });

  minutesBtn.addEventListener("click", () => {
    minutes = Number(minutesInput.value);

    daysInput.value = minutes / 60 / 24;
    hoursInput.value = minutes / 60;
    secondsInput.value = minutes * 60;
  });

  secondsBtn.addEventListener("click", () => {
    seconds = Number(secondsInput.value);

    daysInput.value = seconds / 60 / 60 / 24;
    hoursInput.value = seconds / 60 / 60;
    minutesInput.value = seconds / 60;
  });
}
