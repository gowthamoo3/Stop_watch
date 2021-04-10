let seconds=0.00;
let minutes=0;
let timerID;

function start_stop()
{
    if((document.getElementById("submitbtn").value=="Start")||(document.getElementById("submitbtn").value=="Resume"))
    {
        document.getElementById("submitbtn").value="Stop"
        console.log("start_stop function is called");
        timerID=setInterval(runTimer,10);
    }
    else {
        document.getElementById("submitbtn").value="Resume"
        clearInterval(timerID);
    }
}
function debug()
{
console.log("minutes="+minutes+"   Seconds="+seconds);
}

setInterval(debug,3000);

function reset()
{
    document.getElementById("submitbtn").value="Start"
    clearInterval(timerID);
    document.getElementById("display").value="00.00.00"
}

function runTimer()
{
seconds=seconds+0.01;
minutes=Math.floor(seconds)/60;
document.getElementById("display").value=`${("0"+Math.floor(minutes)).slice(-2)}.${("0"+seconds.toFixed(2)).slice(-5)}`
}

