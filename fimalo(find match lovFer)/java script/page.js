const time = document.getElementById("time"),
      greeting = document.getElementById("greeting"),
      name = document.getElementById("name"),
      focus = document.getElementById("focus");

    showTime()
function showTime(){
    const toDay = new Date();
    let hours = toDay.getHours(),
        minutes = toDay.getMinutes(),
        seconds = toDay.getSeconds()
        amPm = (hours < 12)? "am":"pm";
        hours = hours%12||12;
        time.innerHTML = `${setZeros(hours)}:${setZeros(minutes)}:${setZeros(seconds)} ${amPm}`;
        setTimeout(showTime,1000)
}

function setZeros(n){
    return (n < 10)? `0${n}`:n;
}

function setBackground(){
    const toDay = new Date();
    let hours = toDay.getHours();
    if(hours < 12){
        document.body.style.backgroundImage="url('morning.jpg')";
        document.body.backgroundImage="url"
        greeting.innerHTML = "Good morning";
        document.body.style.color = "white";
    }
     else if(hours < 18){
        document.body.style.backgroundImage="url('afternoon.jpg')";
        greeting.innerHTML = "Good afternoon";
    }
    else{
        document.body.style.backgroundImage="url('evening.jpg')";
        greeting.innerHTML = "Good evening";
        document.body.style.color = "white";
    }
}
setBackground();
getName();
function getName(){
    if(localStorage.getItem("name")===null){
        name.textContent = "[Enter name]";
    }
    else{
       name.textContent =  localStorage.getItem("name");
    }
}

name.addEventListener("keypress", setName)
name.addEventListener("blur", setName)
 function setName(e)
 {
    if(e.type === "keypress"){
        if(e.keyCode==13 || e.which==13){
            localStorage.setItem("name", e.target.innerText);
    name.blur();
        }
    }
    else{
        localStorage.setItem("name", e.target.innerText)
    }
}
getFocus();
function getFocus(){
    if(localStorage.getItem("focus")===null){
        focus.textContent = "[Enter focus]";
    }
    else{
       focus.textContent =  localStorage.getItem("focus");
    }
}

focus.addEventListener("keypress", setFocus)
focus.addEventListener("blur", setFocus)
 function setFocus(e)
 {
    if(e.type === "keypress"){
        if(e.keyCode==13 || e.which==13){
            localStorage.setItem("focus", e.target.innerText);
    focus.blur();
        }
    }
    else{
        localStorage.setItem("focus", e.target.innerText)
    }
}

