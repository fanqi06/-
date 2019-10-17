window.onload = function () {
    var aA = document.getElementsByTagName("a");
    var oUl = document.getElementById("ul1");
    for (var i=0; i < aA.length; i++){
        aA[i].onclick = function () {
          oUl.removeChild(this.parentNode);
        };
    }
};