let audioPlayer=null;
function startApp(){
    audioPlayer = new AudioPlayer(false,"#audio");
}
function reproducir(){
    document.querySelector("#play").style.display="none";
    document.querySelector("#pause").style.display="grid";
    audioPlayer.play=true;
}
function pausar(){
    document.querySelector("#play").style.display="grid";
    document.querySelector("#pause").style.display="none";
    audioPlayer.play=false;
}