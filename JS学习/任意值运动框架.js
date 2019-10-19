window.onload = function () {
  var oDiv1 = document.getElementById("div1");
  var oDiv2 = document.getElementById("div2");
  var oDiv3 = document.getElementById("div3");
  var oDiv4 = document.getElementById("div4");
  var oDiv5 = document.getElementById("div5");
  oDiv1.onmouseover = function () {
      change(this,400,"height");
  };
    oDiv1.onmouseout = function () {
        change(this,200,"height");
    };
    oDiv2.onmouseover = function () {
        change(this,400,"width");
    };
    oDiv2.onmouseout = function () {
        change(this,200,"width");
    };
    oDiv3.onmouseover = function () {
        change(this,50,"font-size");
    };
    oDiv3.onmouseout = function () {
        change(this,14,"font-size");
    };
    oDiv4.onmouseover = function () {
        change(this,100,"border-width");
    };
    oDiv4.onmouseout = function () {
        change(this,10,"border-width");
    };
    oDiv5.onmouseover = function () {
        change(this,100,"opacity");
    };
    oDiv5.onmouseout = function () {
        change(this,20,"opacity");
    };
};

function getStyle(obj,name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj,false)[name];
    }
}
function change(obj,iTarget,attr) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur = 0;
        if (attr == "opacity") {
            cur = Math.round(parseFloat(getStyle(obj,attr))*100);
        }
        else {
            cur = parseInt(getStyle(obj,attr));
        }
        var speed = (iTarget-cur)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
        }
        else {
            if (attr == "opacity") {
                obj.style.filter = "alpha(opacity: "+(cur+speed)+")";
                obj.style.opacity = (cur+speed)/100;
            }
            else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },30);

}