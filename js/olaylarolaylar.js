/* Time Things Start.
    http://codepen.io/shaman_tito/pen/aIwmz
*/
tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function getClock(){
    d = new Date();
    nday = d.getDay();
    nmonth = d.getMonth();
    ndate = d.getDate();
    nyear = d.getYear();
    nhour = d.getHours();
    nmin = d.getMinutes();
    nsec = d.getSeconds();

    if(nyear < 1000) nyear = nyear + 1900;
    
    if(nhour == 0) {ap = " AM";nhour = 12;}
else if(nhour <= 11) {ap = " AM";}
else if(nhour == 12) {ap = " PM";}
else if(nhour >= 13) {ap = " PM";nhour -=12}
    
if(nmin <= 9) {nmin = "0" +nmin;}
if(nsec <= 9) {nsec = "0" +nsec;}
    
    document.getElementById('clock').innerHTML=nhour+":"+nmin+ap;
    setTimeout("getClock()", 1000);
}
window.onload=getClock;

/*
Time Things End.
*/