const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
const month = date.getMonth(); 
console.log(date);

monthName.innerHTML = date.toLocaleString("en",{month:"long"});

 dayName.innerHTML = date.toLocaleString("en",{weekday:"long"})
 
 dayNum.innerHTML = date.getDate();
 
 year.innerHTML = date.getFullYear();


