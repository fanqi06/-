window.onload=function () {
    var oBtn1=document.getElementById('btn1');
    var oBtn2=document.getElementById('btn2');
    var timer=null;
    oBtn1.onclick = function () {
        timer=setInterval(function () {
            alert("a");
        },2000);
    };
    oBtn2.onclick = function () {
        clearInterval(timer);
    };
}