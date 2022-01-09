canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight=90;
roverX=10;
roverY=10;
var Img =["Img1.jfif", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jfif", "Img6.jfif"];
Rnum= Math.floor(Math.random() * 6);
console.log(Rnum);

backgroundImage =Img[Rnum];
console.log(backgroundImage);
roverImg="rover.png";
function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src=backgroundImage;
    roverimagetag= new Image();
    roverimagetag.onload = uploadRover;
    roverimagetag.src=roverImg;

}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height);
}

function uploadRover(

){
    ctx.drawImage(roverimagetag,roverX,roverY,roverWidth,roverHeight);

}

window.addEventListener("keydown",MyKeyDown)
;
function MyKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
          console.log("Up");
    }
    if(keyPressed=="40"){
        down();
          console.log("Down");

    }
    if(keyPressed=="39"){
        Right();
          console.log("Right");
    }
    if(keyPressed=="37"){
        Left();
          console.log("Left");
    }
}
function up(){
    if(roverY >0 ){
        roverY=roverY - 10;
        console.log("Rover X = " + roverX + " Rover Y = " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}
function down(){
    if(roverY <=500 ){
        roverY=roverY + 10;
        console.log("Rover X = " + roverX + " Rover Y = " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}
function Left(){
    if(roverX >0 ){
        roverX=roverX - 10;
        console.log("Rover X = " + roverX + " Rover Y = " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}
function Right(){
    if(roverX <=700 ){
        roverX=roverX + 10;
        console.log("Rover X = " + roverX + " Rover Y = " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}
