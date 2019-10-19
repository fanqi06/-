window.onload = function () {
    var oForm = document.getElementById("form1");

    oForm.onsubmit = function () {
        alert("aaa");
    };
    oForm.onreset = function () {
      alert("bbb");
    };
};