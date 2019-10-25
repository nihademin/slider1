var next=document.getElementById("next")
var prev=document.getElementById("prev")
var slider=document.querySelector(".slider ul")
var nihad=0


next.onclick=function(){
    nihad++;

if(nihad==slider.querySelectorAll("li").length){
nihad=0;
}
slider.style.left=(-800*nihad)+"px"
}

prev.onclick=function(){
    nihad--;

    if(nihad==-1){
        nihad=slider.querySelectorAll("li").length-1
        }
    
    slider.style.left=(-800*nihad)+"px"
}
