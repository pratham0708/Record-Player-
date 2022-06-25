let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
    if(state == false){
        record.classList.add("on");
        toneArm.classList.add("play");
        setTimeout(() =>{
            song.play();
        },1000);
    }else{
        record.classList.remove("on");
        toneArm.classList.remove("play");
        song.pause();
    }
    state = !state;
    // console.log(state);
});
slider.addEventListener("input",(e) => {
    song.volume = Number(e.target.value);

});

// function getHex()
// {
//     let letters = "0123456789ABCDEF";
//     let color = '#';

//         for(var i = 0; i<6; i++)
//              color += letters[(Math.floor(Math.random() * 16))];
//     return color;
// }
// function changeColor()
// {
//     let hex = getHex();
//     document.getElementById("hex").innerHTML = hex;
//     document.getElementsByTagName("BODY")[0].style.backgroundColor = hex;
    
// }