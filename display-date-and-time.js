/*
##################################################
# JavaScript Display Date & Time
# Author : GitHub@MoYu-Official
# Website : https://MoYu-Official.GitHub.io/JavaScript/
# Version : 1.1_2012-10-22
# Don't delete copyright information.
##################################################
*/
function time()
{
    var date = new Date();
    var yyyy = date.getFullYear();
    var MM = date.getMonth()+1;
    var dd = date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    MM = xtime(MM);
    dd = xtime(dd);
    hh = xtime(hh);
    mm = xtime(mm);
    ss = xtime(ss);
    var week;
    if (date.getDay() == 0) week = "星期日" // Sun.
    if (date.getDay() == 1) week = "星期一" // Mon.
    if (date.getDay() == 2) week = "星期二" // Tue.
    if (date.getDay() == 3) week = "星期三" // Wed.
    if (date.getDay() == 4) week = "星期四" // Thu.
    if (date.getDay() == 5) week = "星期五" // Fri.
    if (date.getDay() == 6) week = "星期六" // Sat.
    document.getElementById("time").innerHTML = yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + " " + week;
}

function xtime(i)
{
    if (i < 10) {
        i = "0" + i;
        }
    return i;
}

setInterval("time()", 1000);
