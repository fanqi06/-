window.onload = function () {
    var oTab = document.getElementById("tab1");
    var oBtn = document.getElementById("btn1");

    oBtn.onclick = function () {

        var arr = [];
        for (var i =0; i<oTab.tBodies[0].rows.length; i++) {
            arr[i] = oTab.tBodies[0].rows[i];
        }
        arr.sort(function (tr1,tr2) {
            var n1 = parseInt(tr1.cells[0].innerHTML);
            var n2 = parseInt(tr2.cells[0].innerHTML);
            return n1 - n2;
        });
        for (var j=0; j<arr.length; j++) {
            oTab.tBodies[0].appendChild(arr[j]);
        }
    };
};