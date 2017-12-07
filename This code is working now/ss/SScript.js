window.onload = function(){
    var pos = 0;
var box= document.getElementById("b");
var t = setInterval(move,10);
function move(){
    if(pos>=160){
        clearInterval(t);
    
    }
    else {
    pos +=1;
    box.style.left = pos+"px";
    }
}
}
