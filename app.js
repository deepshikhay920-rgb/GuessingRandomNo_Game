let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("generate randon color");
    let h3=document.querySelector("h3");
    let rndmclr=getRandomColor();
    h3.innerText=rndmclr;
    console.log("Color updated");
    let div=document.querySelector("div");
    div.style.backgroundColor=rndmclr;
});
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let clr=`rgb(${red},${green},${blue})`;
    return clr;

}