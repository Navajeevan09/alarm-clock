// Calling this function from html input element
function formatInputElements(input) {
  input.value = String(input.value).padStart(2, "0");
}

document.addEventListener("DOMContentLoaded", () => {
  // Getting elements from document
  const currentTimeElement = document.getElementById("current-time");
  const hoursElement = document.getElementById("hours");
  const minElement = document.getElementById("minutes");
  const secElement = document.getElementById("seconds");
  const ampmElement = document.getElementById("ampm-options");
  const setAlarmBtnElement = document.getElementById("set-alarm-btn");
  const deleteAlarmBtnElement = document.getElementById("delete-alarm-btn");
  const alarmListElement = document.getElementById("alarm-list-container");

  // Initializing array to store alarm lists
  let alarmtimeList = [];

  // Current Time
  setInterval(() => {
    let currentTime = new Date();
    const options = {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    currentTime = currentTime.toLocaleTimeString("en-US", options);

    currentTimeElement.textContent = currentTime;
    checkAlarmtime(currentTime);
  }, 1000);

  // Get input values from user and those as return time format
  function getInputTime() {
    const hours = hoursElement.value;
    const minutes = minElement.value;
    const seconds = secElement.value;
    const ampm = ampmElement.value;

    const inputTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    console.log(inputTime);

    return inputTime;
  }

  // Set alarm button event listener
  setAlarmBtnElement.addEventListener("click", () => {
    const inputTime = getInputTime();
    createAlarmList(inputTime);
    console.log(alarmtimeList);
  });

  function createAlarmList(inputTime) {
    alarmtimeList.push(inputTime);
    alarmtimeList.forEach((alarmTime) => {
      alarmListElement.insertAdjacentHTML(
        "afterbegin",
        `<div class="alarm-list" class="d-flex justify-content-between">
          <span>${alarmTime}</span>
          <button id="delete-alarm-btn" class="btn-secondary">DELETE</button>
        </div>`
      );
    });
  }

  function checkAlarmtime(currentTime) {
    alarmtimeList.forEach((alarmTime) => {
      if (currentTime === alarmTime) {
        alert(`${currentTime}\n Your time has arrived. Let's get started!`);
      }
    });
  }
});
