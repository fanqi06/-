window.onload = function () {
  var oDiv1 = document.getElementById("div1");
  var oBtn1 = document.getElementById("btn1");
  var oBtn2 = document.getElementById("btn2");
  var timer = null;
  function move(iTarget) {

      clearInterval(timer);
      timer = setInterval(function () {
          var speed = 0;
          if (oDiv1.offsetLeft < iTarget) {
              speed = 7;
          }
          else {
              speed = -7
          }
          if (Math.abs(iTarget-oDiv1.offsetLeft)<=7) {
              clearInterval(timer);
              oDiv1.style.left = iTarget + "px";
          }
          else {
              oDiv1.style.left = oDiv1.offsetLeft + speed + "px";
          }
      },30);
  }

  oBtn1.onclick = function () {
      move(100);
  };
  oBtn2.onclick = function () {
      move(300);
  };
};