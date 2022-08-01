var n=0;

function next(){

n++;

if (n >= Caption.length){
n=0;
}
document.getElementById("Caption").innerHTML=Caption[n];



var Audio = document.getElementById("Audio");

if (n >= Source.length){
        n = 0;
    }

if (n==0){Audio.src=Source[n];}
else{
Audio.src = Source[n];
Audio.play();
  }
}

function loadFirstArray(){
document.getElementById("Caption").innerHTML=Caption[0];
var Audio = document.getElementById("Audio");
Audio.src=Source[0];
}
