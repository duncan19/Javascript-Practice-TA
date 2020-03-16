function subFunc() {
  var sub = 5 - 2;
  document.getElementById("math").innerHTML = "5 - 2 = " + sub;
}
function mulFunc() {
  var mul = 5 * 2;
  document.getElementById("math2").innerHTML = "5 * 2 = " + mul;
}
function divFunc() {
  var div = 5 / 2;
  document.getElementById("math3").innerHTML = "5 / 2 = " + div;
}
function subAddFunc() {
  var subAdd = 5 - 2 * 3;
  document.getElementById("math4").innerHTML = "5 - 2 = " + subAdd;
}
function remFunc() {
  var rem = 5 % 2 ;
  document.getElementById("math5").innerHTML = "5 % 2 = " + rem;
}
function mynum() {
  var x = 234
  document.getElementById("math6").innerHTML = -x;
}
function mynum2() {
  var y = 234
  document.getElementById("math7").innerHTML = --y;
}
function ranNum() {
  var num = (Math.random() * 100)
  alert(num)
}
