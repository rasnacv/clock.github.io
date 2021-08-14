

function displayTime(){
var value=new Date();
var hours= value.getHours();
var minutes= value.getMinutes();
var seconds=value.getSeconds();
if(seconds<10){
    seconds="0"+seconds;
}
if(minutes<10){
    minutes="0"+minutes;
}

var year=value.getFullYear();
var m=value.getMonth();
var d=value.getDay();
var datenum=value.getDate();
var day;
switch(d){
    case 0: day="Sunday";
    break;
    case 1:day="Monday";
    break;
    case 2:day="Tuesday";
    break;
    case 3:day="Wednesday";
    break;
    case 4:day="Thursday";
    break;
    case 5:day="Friday";
    break;
    case 6:day="Saturday";
    break;
}
switch(m)
{
    case 0: month="January";
    break;
    case 1:month="February";
    break;
    case 2:month="March";
    break;
    case 3:month="April";
    break;
    case 4:month="May";
    break;
    case 5:month="June";
    break;
    case 6:month="July";
    break;
    case 7: month="August";
    break;
    case 8:month="September";
    break;
    case 9:month="October";
    break;
    case 10:month="November";
    break;
    case 11:month="December";
    break;
    


}

document.getElementById('time').textContent = hours+":"+minutes+":"+seconds;

document.getElementById('date').textContent = datenum+" "+month+" "+year;

document.getElementById('week').textContent = day;


}
 setInterval(displayTime,100);

