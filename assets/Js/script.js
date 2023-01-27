// reference to the DOM elements (create variables)


// display the current time with a setInterval to refresh every minute
$(document).ready(function () {
    setInterval(function () {
        const today = moment();
        $("#currentTime").text(today.format('MMMM Do YYYY, h:mm:ss'));
    },
    1000);
})