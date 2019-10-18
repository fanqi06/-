window.onload = function () {
    var oTab = document.getElementById("tab1");
    //alert(oTab.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML);
    //alert(oTab.tBodies[0].rows[1].cells[1].innerHTML);
    var oldClor = "";
    for (var i = 0; i<oTab.tBodies[0].rows.length; i++) {
        oTab.tBodies[0].rows[i].onmouseover = function () {
            oldClor = this.style.background;
            this.style.background = "green";
        };
        oTab.tBodies[0].rows[i].onmouseout = function () {
            this.style.background = oldClor;
        };
        if (i%2) {
            oTab.tBodies[0].rows[i].style.background = "";
        }
        else {
            oTab.tBodies[0].rows[i].style.background = "#cccccc";
        }
    }
};