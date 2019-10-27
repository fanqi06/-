var stringValue = "   Lorem ipsum dolor sit amet, consectetur adipisicing elit   ";
var positions = new Array();

//indexOf()、lastIndexOf()方法

var pos = stringValue.indexOf("e");
while (pos > -1) {
    positions.push(pos);
    pos = stringValue.indexOf("e",pos+1);
}
//alert(positions);

//trim()方法，删除前后空格,字符串副本

var trimmedStringValue = stringValue.trim();
//alert(trimmedStringValue);
//alert(stringValue);

var string1 = "Hello World";
var string2 = string1.toLowerCase();
var string3 = string1.toUpperCase();
//alert(string1);
//alert(string2);
//alert(string3);

var text = "cat,bat,sat,fat";
var pattern = /.at/;
var matches = text.match(pattern);
//(matches);
var pos1 = text.search(/at/);
//alert(pos1);
var result1 = text.replace("at","ond");
//alert(result1);
result1 = text.replace(/at/g,"ond");
//alert(result1);
result1 = text.replace(/(.at)/g,"word($1)");
//alert(result1);

function htmlEscape(text1) {
    return text1.replace(/[<>"&]/g , function(match,pos,originalText){
       switch (match) {
           case "<" :
               return "&lt;";
           case ">" :
               return "&gt;";
           case "&" :
               return "&amp;";
           case "\"" :
               return "&quat;";
       }
    });
}
alert(htmlEscape("<p class=\"gretting\">Hello world!</p>"));
