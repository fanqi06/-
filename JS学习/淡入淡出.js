window.onload = function () {
  var oDiv = document.getElementById("div1");
  oDiv.onmouseover = function () {
      move(100);
  };
  oDiv.onmouseout = function () {
      move(30);
  };
};
var timer = null;
var alpha0 = 30;
function move(iTarget) {
    var oDiv = document.getElementById("div1");
    var speed = 0;
    if (alpha0 < iTarget){
        speed = 10;
    }
    else {
        speed = -10;
    }
    clearInterval(timer);
    timer = setInterval(function () {
        if(alpha0 == iTarget) {
            clearInterval(timer);
        }
        else {
            alpha0 += speed;
        }
        oDiv.style.filter = "alpha(opacity: +"+alpha0+")";
        oDiv.style.opacity = alpha0/100;
    },300);
}