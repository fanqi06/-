window.onload = function () {
  var oDiv1 = document.getElementById("div1");
  var timer = null;
  oDiv1.onmouseover = function () {
      move(0,10);
  };
  oDiv1.onmouseout = function () {
      move(-150,-10);
  }
  function move(iTarget,speed) {
      clearInterval(timer);
      timer = setInterval(function () {

          if (oDiv1.offsetLeft ==iTarget){
              clearInterval(timer);
          }
          else {
              oDiv1.style.left = oDiv1.offsetLeft + speed +"px";
          }

      },30);
  }
};