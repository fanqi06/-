function getByClass(oParent,sClass) {
    var aEle = oParent.getElementsByTagName("*");
    var aResult = [];
    for (var i=0; i<aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
window.onload = function () {
    var oDiv = document.getElementById("playimages");
    var  oBtnPrev = getByClass(oDiv,"prev")[0];
    var  oBtnNext = getByClass(oDiv,"next")[0];
    var  oMarkLeft = getByClass(oDiv,"mark_left")[0];
    var  oMarkRight = getByClass(oDiv,"mark_right")[0];

    var oDivSmall = getByClass(oDiv,"small_pic")[0];
    var oUlSmall = oDivSmall.getElementsByTagName("ul")[0];
    var aLiSmall = oDivSmall.getElementsByTagName("li");
    var oUlBig = getByClass(oDiv, "big_pic")[0];
    var aLiBig = oUlBig.getElementsByTagName("li");

    var nowZindex = 2;
    var now = 0;
    oUlSmall.style.width = aLiSmall.length * aLiSmall[0].offsetWidth + "px";

    //左右按钮
    oBtnPrev.onmouseover=oMarkLeft.onmouseover = function () {
        change(oBtnPrev,100,"opacity");
    };
    oBtnPrev.onmouseout=oMarkLeft.onmouseout = function () {
        change(oBtnPrev,0,"opacity");
    };
    oBtnNext.onmouseover=oMarkRight.onmouseover = function () {
        change(oBtnNext,100,"opacity");
    };
    oBtnNext.onmouseout=oMarkRight.onmouseout = function () {
        change(oBtnNext,0,"opacity");
    };

    //大图切换
    for (var i = 0; i<aLiSmall.length; i++) {
        aLiSmall[i].index = i;
        aLiSmall[i].onclick = function () {
            if (this.index == now) return;
            now = this.index;
            tab();
        };
        aLiSmall[i].onmouseover = function () {
            change(this,100,"opacity");
        } ;
        aLiSmall[i].onmouseout = function () {
            if (this.index != now)
            {
                change(this, 60, "opacity");
            }
        } ;
    }

    function tab () {
        aLiBig[now].style.zIndex = nowZindex++;
        for (var i = 0; i<aLiSmall.length; i++) {
            change(aLiSmall[i],60,"opacity");
        }
        change(aLiSmall[now],100,"opacity");
        aLiBig[now].style.height = 0;
        change(aLiBig[now],320,"height");
        if (now == 0) {
            change(oUlSmall,0,"left");
        } else if (now == aLiSmall.length - 1) {
            change(oUlSmall,-(now-2)*aLiSmall[0].offsetWidth,"left");
        } else {
            change(oUlSmall, -(now-1) * aLiSmall[0].offsetWidth, "left");
        }
    }

    oBtnPrev.onclick = function () {
        now --;
        if (now == -1) {
            now= aLiSmall.length -1;
        }
        tab();
    };
    oBtnNext.onclick = function () {
        now ++;
        if (now == aLiSmall.length) {
            now = 0;
        }
        tab();
    };
    var timer = setInterval(oBtnNext.onclick,2000);
    oDiv.onmouseover = function () {
        clearInterval(timer);
    };
    oDiv.onmouseout = function () {
        timer = setInterval(oBtnNext.onclick,2000);
    };

};
