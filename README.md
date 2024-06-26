# Alarm Clock

This is a web-based alarm clock application built using HTML, CSS, and JavaScript. It will show the current time. It allows users to set alarms and notifies them when the alarm time is reached.

[preview](https://navajeevan09.github.io/alarm-clock/)

## Table of Contents

- [Features](#features)
- [Clone](#clone)
- [Usage](#usage)
- [Code Structure](#code-structure)

## Features

- Display the current time.
- Set alarms with hour, minute, second, and AM/PM options.
- Display a list of set alarms.
- Delete alarms from a list
- Notify the user when an alarm time is reached.

## Clone

1. Clone the repository:

```bash
git clone https://github.com/Navajeevan09/alarm-clock.git
```

## Usage

1. Open `index.html` in your web browser.
2. The current time will be displayed at the top.
3. To set an alarm:
   - Enter the hour, minute, and second.
   - Select AM or PM.
   - Click the "Set Alarm" button.
4. The set alarms will be listed below.
5. When an alarm time is reached, you will be notified.
6. To delete the alarm from list you can click the "Delete" button.

## Code Structure

### HTML

The `index.html` file contains the structure of the alarm clock. 
It includes:

- A heading for the alarm clock.
- A section to display the current time.
- Input fields and options for setting the alarm time (hours, minutes, seconds, AM/PM).
- A button to set the alarm.
- A container to display the list of set alarms.

### CSS

The `styles.css` file contains the styles for the alarm clock. It ensures the application is visually appealing and responsive.

### JavaScript

The `script.js` file contains the logic for the alarm clock. 
It includes:

- Functions to manage input field behaviors to maintain time format.
- The application displays the current time, which updates every second using `setInterval`.
- Functions to get user inputs, adding alarm times in list, alerting on alarm time using `alert`.
- Event listeners for set alarm and delete alarm buttons intractions.
