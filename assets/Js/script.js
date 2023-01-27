// reference to the DOM elements (create variables)
const addProjectButton =$("#project-btn");
let projectNameInput =$("#project-name-input");
let projectTypeInput =$("#project-type");
let hourlyRate =$("#hourly-rate-input");
let datepicker =$("datepicker");
const saveProjectButton =$("#save-btn")


// display the current time with a setInterval to refresh
$(document).ready(function () {
    setInterval(function () {
        const today = moment();
        $("#currentTime").text(today.format('MMMM Do YYYY, h:mm:ss a'));
    },
    1000);
})

// 