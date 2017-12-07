
var  c = prompt("enter u name");
alert("Hello there, "+c);

window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function() {
         alert(c+", poshel nahui");
    }
}
window.onload = function(a){
    var pos = 0;
var box= document.getElementById("b");
var t = setInterval(move,10);
function move(){
    if(pos>=260){
        clearInterval(t);
    
    }
    else {
    pos +=1;
    box.style.left = pos+"px";
    }
}
}
