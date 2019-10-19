window.onload = function () {

    var oBtn = document.getElementById("btn1");
    var oDiv1 = document.getElementById("div1");
    var timer = null;
    oBtn.onclick = function () {

        //保证每次只有一个定时器工作

        clearInterval(timer);
      timer = setInterval(function () {
          var speed = 4;
          if (oDiv1.offsetLeft >= 300){
            clearInterval(timer);
            }
          else {
              oDiv1.style.left = oDiv1.offsetLeft + speed + "px";
          }
      },30);
    };
};
