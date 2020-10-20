// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  dayOFWeekSpan = document.querySelector('.dayOfWeek'), 
  day = document.querySelector ('.day'),
  month = document.querySelector ('.month'),
  joke = document.querySelector ('.joke'),
  btnJoke = document.querySelector ('.button__joke'), 
  inputCity = document.querySelector ('.input'),
  tempfolder = document.querySelector('.temp'), 
  btnWeather = document.querySelector ('.btn__weather'), 
  current__city = document.querySelector ('.current__city');
// Options
const showAmPm = false;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
 // hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12 && hour > 6) {
    // Morning
    greeting.textContent = 'Good Morning, ';
    document.body.style.color = 'white';
  } else if (hour < 18 && hour >12) {
    // Afternoon
    greeting.textContent = 'Good Afternoon, ';
    document.body.style.color = 'white';
  } else  if (hour < 24 && hour > 18) { 
    // Evening
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
    // night 
  } else {
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  }

  switch (hour) {
case 0 :  document.body.style.backgroundImage = "url('../assets/images/night/01.jpg')"; break;
case 1 :  document.body.style.backgroundImage = "url('./assets/images/night/02.jpg')";break;
case 2 :  document.body.style.backgroundImage = "url('./assets/images/night/03.jpg')";break;
case 3 :  document.body.style.backgroundImage = "url('./assets/images/night/04.jpg')";break;
case 4 :  document.body.style.backgroundImage = "url('./assets/images/night/05.jpg')";break;
case 5 :  document.body.style.backgroundImage = "url('./assets/images/night/06.jpg')";break;

case 6 :  document.body.style.backgroundImage = "url('./assets/images/morning/01.jpg')";break;
case 7 :  document.body.style.backgroundImage = "url('./assets/images/morning/02.jpg')";break;
case 8 :  document.body.style.backgroundImage = "url('./assets/images/morning/03.jpg')";break;
case 9 :  document.body.style.backgroundImage = "url('./assets/images/morning/04.jpg')";break;
case 10 :  document.body.style.backgroundImage = "url('./assets/images/morning/05.jpg')";break;
case 11:  document.body.style.backgroundImage = "url('./assets/images/morning/06.jpg')";break;
case 12 :  document.body.style.backgroundImage = "url('./assets/images/morning/07.jpg')";break;

case 13 :  document.body.style.backgroundImage = "url('./assets/images/day/01.jpg')";break;
case 14:  document.body.style.backgroundImage = "url('./assets/images/day/02.jpg')";break;
case 15 :  document.body.style.backgroundImage = "url('./assets/images/day/03.jpg')";break;
case 16 :  document.body.style.backgroundImage = "url('./assets/images/day/04.jpg')";break;
case 17 :  document.body.style.backgroundImage = "url('./assets/images/day/05.jpg')";break;
case 18:  document.body.style.backgroundImage = "url('./assets/images/day/06.jpg')";break;
case 19 :  document.body.style.backgroundImage = "url('./assets/images/day/07.jpg')";break;

case 20 :  document.body.style.backgroundImage = "url('./assets/images/evening/01.jpg')";break;
case 21:  document.body.style.backgroundImage = "url('./assets/images/evening/02.jpg')";break;
case 22 :  document.body.style.backgroundImage = "url('./assets/images/evening/03.jpg')";break;
case 23 :  document.body.style.backgroundImage = "url('./assets/images/evening/04.jpg')";break;


console.log (hour);

  }

}// end func

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '' ) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
  name.onfocus = function (){
    name.textContent = null;
  }
  name.onblur = function () {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '' ) {
      name.textContent = '[Enter Name]';
    }
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
  focus.onfocus = function (){
    focus.textContent = null;
  }
  focus.onblur = function () {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
      focus.textContent = '[Enter Focus]';
    }
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// GET DAY OF WEEK 

function getDayOFWeek() {
   let myDate = new Date();
   let dayOFWeek = myDate.getDay();
   let strDayOfWeek = '';
   switch (dayOFWeek) {
     case 0: strDayOfWeek = 'Sunday, '; break;
     case 1: strDayOfWeek = 'Monday, '; break;
     case 2: strDayOfWeek = 'Tuesday, '; break;
     case 3: strDayOfWeek = 'Wednesday, '; break;
     case 4: strDayOfWeek = 'Thursday, '; break;
     case 5: strDayOfWeek = 'Friday, ' ;break;
     case 6: strDayOfWeek = 'Saturday, '; break;
   }
   dayOFWeekSpan.textContent = strDayOfWeek;
}// end func

//GET DAY 
function getDay() {
  let myDate = new Date();
  let myDay = myDate.getDate();
  day.textContent = myDay;
}
//GET MONTH 
function getMonth() {
  let myDate = new Date();
  let numMonth = myDate.getMonth();
  let strMonth = '';
  switch (numMonth) {
    case 0: strMonth = 'January'; break;
    case 1: strMonth = 'February'; break;
    case 2: strMonth = 'March'; break;
    case 3: strMonth = 'April'; break;
    case 4: strMonth = 'May'; break;
    case 5: strMonth = 'June' ;break;
    case 6: strMonth = 'July'; break;
    case 7: strMonth = 'August'; break;
    case 8: strMonth = 'September'; break;
    case 9: strMonth = 'October'; break;
    case 10: strMonth = 'November'; break;
    case 11: strMonth = 'December'; break;
  }
  month.textContent = strMonth;
}// end func

function changeImage() {
  const buttonChange = document.querySelector ('.button');
  let today = new Date(),
  hour = today.getHours();
  let number, period;
  switch (hour) {
    case 0 : number = 1;break;
    case 1 : number = 2;break;
    case 2 : number = 3;break;
    case 3 :number = 4;break;
    case 4 : number = 5;break;
    case 5 : number = 6;break;
    
    case 6 :number = 1; break;
    case 7 : number = 2; break;
    case 8 : number = 3; break;
    case 9 : number = 4; break;
    case 10 : number = 5; break;
    case 11: number = 6; break;
    case 12 : number = 7;  break;
    
    case 13 : number =1;break;
    case 14: number =2;break;
    case 15 :number = 3;break;
    case 16 : number =4 ;break;
    case 17 : number = 5; break;
    case 18:  number= 6; break;
    case 19 : number = 7;break;
    
    case 20 : number = 1; break;
    case 21: number = 2; break;
    case 22 : number = 3;break;
    case 23 : number = 4; break;
  }
  if (hour > 6 && hour< 12){
    period = 'morning';
  } else if (hour > 12 && hour < 18) {
    period = "day";
  } else if (hour > 18 && hour < 24 ) {
    period = 'evening'; 
  } else {
    period = 'night';
  }

  buttonChange.addEventListener ('click', () =>{
     let  numberStr ='';
   
    number++
    
    if (number === 8 && period === 'day') {
      number = 1;
      period = 'evening';
    };
    if (number === 5 && period === 'evening') {
      number = 1;
      period = 'night';
    }
    if (number === 8  && period === 'morning'){
      number = 1;
      period = 'day';
    }
    if (number === 7 && period === 'night'){
      number = 1;
      period = 'morning';
    }
    numberStr = '0' + (number);
    console.log (period + numberStr);
    document.body.style.backgroundImage = `url('../assets/images/${period}/${numberStr}.jpg')`;
  });
  
}

// JOKE OF DAY 
function get_joke_of_the_day() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
     // Access the result here
     let data = JSON.parse(this.responseText);
 let  strJoke =  (data.value);
 joke.textContent = strJoke;
 } else { joke.textContent = 'Sorry, something wrong' }
  };
  xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
  xhttp.send();
}

btnJoke.addEventListener ('click', () => {
  get_joke_of_the_day();
});

async function getWeather(city_name) { 
 
  if (localStorage.getItem('city')=== null || localStorage.getItem('city') === ''){
    city_name = localStorage.setItem('city', 'Kyiv');
  } else {
    city_name = localStorage.getItem('city');
    current__city.textContent = city_name;

  }
    const API_key = '0e3f4c3098c7d2107ce581907ae44eb7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=0e3f4c3098c7d2107ce581907ae44eb7&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    tempfolder.textContent = data.main.temp;

    btnWeather.addEventListener ('click', () =>{
       city_name = inputCity.value;
       current__city.textContent = city_name;
       localStorage.setItem('city', city_name);
      getWeather(city_name);
      inputCity.value = '';
    });
    
}




// Run
showTime();
getDayOFWeek();
getDay();
getMonth();
setBgGreet();
getName();
getFocus();
changeImage();
get_joke_of_the_day();
getWeather();