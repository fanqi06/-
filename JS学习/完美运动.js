window.onload = function () {
  var oBtn1 = document.getElementById("btn1");
  var oDiv1 = document.getElementById("div1");

  oBtn1.onclick = function () {
    move(oDiv1,{width:101,height:300,opacity:100});
  };
};