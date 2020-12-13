function showTime() {
    const timeAndDate = new Date();

    const show = document.querySelector(".show");
    const dayDisplay = document.querySelector("#day");
    const dateDisplay = document.querySelector("#date");
    const ampmDisplay = document.querySelector("#am-or-pm");

    let hour = timeAndDate.getHours(); //0-23
    let minutes = timeAndDate.getMinutes(); //0-59
    let seconds = timeAndDate.getSeconds();
    let dayNum = timeAndDate.getDay(); //0-6
    let dateMonthNum = timeAndDate.getMonth(); //0-11 Jan-
    let dayOfMonth = timeAndDate.getDate();

    let dayOfWeek;
    switch (dayNum) {
        case 0:
            dayOfWeek = "Sun";
            break;
        case 1:
            dayOfWeek = "Mon";
            break;
        case 2:
            dayOfWeek = "Tues";
            break;
        case 3:
            dayOfWeek = "Wed";
            break;
        case 4:
            dayOfWeek = "Thu";
            break;
        case 5:
            dayOfWeek = "Fri";
            break;
        case 6:
            dayOfWeek = "Sat";
            break;
    }

    let month;
    switch (dateMonthNum) {
        case 0:
            month = "Jan.";
            break;
        case 1:
            month = "Feb.";
            break;
        case 2:
            month = "Mar.";
            break;
        case 3:
            month = "Apr.";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun.";
            break;
        case 6:
            month = "Jul.";
            break;
        case 7:
            month = "Aug.";
            break;
        case 8:
            month = "Sep.";
            break;
        case 9:
            month = "Oct.";
            break;
        case 10:
            month = "Nov.";
            break;
        case 11:
            month = "Dec.";
            break;
    }

    /*
hour0  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
    12 1 2 3 4 5 6 7 8 9 10 11 12 1  2  3  4  5  6  7  8  9  10 11
    */

    let theHour;
    let theMinutes;
    let theSeconds;
    if (hour == 0) {
        theHour = "12";
    } else if (hour != 0 && hour <= 9) {
        theHour = "0" + hour;
    } else if (hour == 10 || hour == 11 || hour == 12) {
        theHour = hour;
    } else if (hour > 12 && hour <= 21) {
        theHour = "0" + (hour - 12);
    } else if (hour == 22 || hour == 23) {
        theHour = hour - 12;
    }

    if (minutes < 10) {
        theMinutes = "0" + minutes;
    } else {
        theMinutes = minutes;
    }

    if (seconds < 10) {
        theSeconds = "0" + seconds;
    } else {
        theSeconds = seconds;
    }

    hourspan.textContent = theHour;
    dividespan.textContent = ":";
    minutespan.textContent = theMinutes;
    
    show.appendChild(hourspan);
    show.appendChild(dividespan);
    show.appendChild(minutespan);
    
    dayDisplay.textContent = `${dayOfWeek}`;
    dateDisplay.textContent = `${month} ${dayOfMonth}`;
    ampmDisplay.textContent = `${hour >= 12 ? "PM" : "AM"}`;
}

window.setInterval(showTime, 1000);
let hourspan = document.createElement("span");
let dividespan = document.createElement("span");
let minutespan = document.createElement("span");
let secondsub = document.createElement("sub");
