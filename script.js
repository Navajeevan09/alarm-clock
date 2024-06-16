// These functions collectively manage the behavior of the time input fields, ensuring it is formatted correctly
function formatInputElements(input) {
  input.value = String(input.value).padStart(2, "0");
}

function clearInput(input) {
  input.value = "";
}

function restrictRange(input, min, max) {
  if (input.value < min || input.value > max) {
    alert(`Please enter a value between ${min} and ${max}.`);
    input.value = "";
  }
}

// Document Event Listener
document.addEventListener("DOMContentLoaded", () => {
  // Getting elements from document
  const currentTimeElement = document.getElementById("current-time");
  const hoursElement = document.getElementById("hours");
  const minElement = document.getElementById("minutes");
  const secElement = document.getElementById("seconds");
  const ampmElement = document.getElementById("ampm-options");
  const setAlarmBtnElement = document.getElementById("set-alarm-btn");
  const alarmListElement = document.getElementById("alarm-list-container");

  // Initializing array to store alarm time lists
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
    ringAlarm(currentTime);
  }, 1000);

  // Get input values from user and return those as time format
  function getInputTime() {
    const hours = hoursElement.value;
    const minutes = minElement.value;
    const seconds = secElement.value;
    const ampm = ampmElement.value;

    const inputTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    return inputTime;
  }

  // Add alarm time based on input
  function addAlarmTime(inputTime) {
    alarmtimeList.push(inputTime);
    renderAlarmList();
  }

  // Render alarm list to update the alarm container
  function renderAlarmList() {
    alarmListElement.innerHTML = "";
    alarmtimeList.forEach((alarmTime, index) => {
      alarmListElement.insertAdjacentHTML(
        "beforeEnd",
        `<div class="alarm-list" data-index="${index}">
          <span>${alarmTime}</span>
          <button class="delete-alarm-btn" class="btn-secondary">DELETE</button>
        </div>`
      );
    });
  }

  // Check the alarm time and ring
  function ringAlarm(currentTime) {
    alarmtimeList.forEach((alarmTime) => {
      if (currentTime === alarmTime) {
        alert(`${currentTime}\nYour time has arrived. Let's get started!`);
      }
    });
  }

  // Set alarm button event listener
  setAlarmBtnElement.addEventListener("click", () => {
    const inputTime = getInputTime();
    addAlarmTime(inputTime);
  });

  // Delete alarm time from array
  alarmListElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-alarm-btn")) {
      const deleteElement = event.target.parentElement;
      const index = deleteElement.getAttribute("data-index");
      alarmtimeList.splice(index, 1);
      renderAlarmList();
    }
  });
});
