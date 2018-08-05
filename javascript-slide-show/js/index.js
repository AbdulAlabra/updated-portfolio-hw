var x = 0;
var y = 0;

var myVar=setInterval(function(){slides()},3000);

function slides() {
  document.getElementsByClassName("pic")[y].style.width="0px";
  document.getElementsByClassName("pic")[x].style.width="100%";
  y = x;
  ++x;
  if (x == 5) {
     x = 0;
  }
}