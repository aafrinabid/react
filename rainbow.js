const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!


const spans=document.querySelectorAll("span")
for (i=0;i<colors.length;i++){
     spans[i].style.color = colors[i];
}