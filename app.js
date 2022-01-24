// DOM SECTION

const timeContainer = document.querySelector('.time-container');
const dateContainer = document.querySelector('.date-container');

// FUNCTIONS

const weekDays = ['monday', 'tuesday', 'weeknesday', 'thursday', 'friday', 'saturday', 'sunday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


(function date(){
    let date = new Date();
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let weekDay = weekDays[date.getDay() - 1];
    let d = date.getDate();

    dateContainer.innerHTML = `${weekDay}, ${month}  ${d}, ${year}`;
})();


const time = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    min = checkTime(min);
    hour = checkTime(hour);
    sec = checkTime(sec);

    timeContainer.innerHTML = `${hour}:${min}:${sec}`;
}

setInterval(time, 1000);

const checkTime = (i) =>{
    if (i< 10) { i = '0' + i }
    return i;
}




