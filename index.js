// let count=0;

// count++;
let count1=0
document.getElementById("count").innerHTML=count1


let button = document.getElementById("submit"),
  count = 0;
  button.onclick = function() {
  count += 1;
  document.getElementById("count").innerHTML=count
  button.innerHTML = "submit";
};