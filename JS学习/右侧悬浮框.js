window.onscroll = function () {
    var oDiv = document.getElementById("div1");
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;

    //oDiv.style.top = document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop + "px";

    //速度取整 防抖
    move(parseInt((document.documentElement.clientHeight - oDiv.offsetHeight)/2 + scrollTop));
};
var timer = null;
function move(iTarget) {
    var oDiv=document.getElementById("div1");
    clearInterval(timer);
    timer = setInterval(function () {
        var speed = (iTarget - oDiv.offsetTop)/10;
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
        if (oDiv.offsetTop == iTarget) {
            clearInterval(timer);
        }
        else {
            oDiv.style.top = oDiv.offsetTop + speed +"px";
        }
    },30);
}
