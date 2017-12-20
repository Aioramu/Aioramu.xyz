window.onload = function(){/*create a ivent*/
    var pos = 0;
var box= document.getElementById("b");/*seek the "b" element in css*/
var t = setInterval(move,10);/*speed of animation*/
function move(){
    if(pos>=160){
        clearInterval(t);/*border of big cube element*/
    
    }
    else {/*animation*/
    pos +=1;
    box.style.left = pos+"px";/*move left of element*/
    }
}
}
