
var images = [
    { "src": "img1.jpg", "alt": "Nature" },
    { "src": "img2.jpg", "alt": "Fjords" }, 
    { "src": "img3.jpg", "alt": "Mountains" },
    { "src": "img4.jpg", "alt": "Lights" }
];

// for(var i = 0; i < images.length; i++){
//     console.log(images[i].alt);
//     console.log(images[i].src);
// }

 var a = document.getElementById("slide");
x = 0;
function showImage(x){
    
    console.log(a);
    a.src = "img/" + images[x].src  ;
    a.alt = images[x].alt ;
}


window.addEventListener("onload",showImage(0));
document.getElementById("inainte").addEventListener("click", function(){
    if(x == images.length-1){
        x = 0;
    }
   showImage(x++);
});

document.getElementById("inapoi").addEventListener("click", function(){

    showImage(x--);
});