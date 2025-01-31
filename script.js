


let currentIndex = 0; 


const prev =document.getElementById("prev")

const next =document.getElementById("next")

const playbtn =document.getElementById("play")

const play =document.getElementById("playing")

const pause =document.getElementById("pause")




const rasm =document.getElementById("rasm")

const nomi =document.getElementById("nomi")

const singer =document.getElementById("singer")

const select =document.getElementById("select")

const progress =document.getElementById("progress")

const audio =document.getElementById("audio")




const option1 =document.getElementById("option1")

const option2 =document.getElementById("option2")

const option3 =document.getElementById("option3")

const option4 =document.getElementById("option4")

const option5 =document.getElementById("option5")

const option6 =document.getElementById("option6")

const option7 =document.getElementById("option7")




playbtn.addEventListener("click",()=>{


    if(select.value=="music1"){
        audio.src=musicsData[0].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music2"){
        audio.src=musicsData[1].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music3"){
        audio.src=musicsData[2].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music4"){
        audio.src=musicsData[3].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music5"){
        audio.src=musicsData[4].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music6"){
        audio.src=musicsData[5].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }
    else if(select.value=="music7"){
        audio.src=musicsData[6].music

        if (play.style.display== "none") {
            audio.pause();
        }
        else{
            audio.play();
        }
    }

    if (play.style.display== "none") {
        play.style.display= "block";
        pause.style.display="none";
        playbtn.style.backgroundColor="blue"
    } else {
        play.style.display= "none";
        pause.style.display="block";
        playbtn.style.backgroundColor="red"
    }
});




const musicsData=[
    {
        name:"Atirgullar ochdi Chiroy",
        rasmi:"./img/bahor.jpg",
        singer:"Jasur Jabborov",
        music:"./music/bahor.mp3"
    },
    {
        name:"Doner Kebab Nacho",
        rasmi:"./img/donerkebab.jpg",
        singer:"TubeRipper",
        music:"./music/donerk.mp3"
    },
    {
        name:"Shape of You",
        rasmi:"./img/shapeyou.jpg",
        singer:"Ed Sheeran",
        music:"./music/shapeofyou.mp3"
    },
    {
        name:"Happy",
        rasmi:"./img/happy.jpg",
        singer:"Pharrell Williams",
        music:"./music/happy.mp3"
    },
    {
        name:"Colors",
        rasmi:"./img/colors.jpg",
        singer:"Jason Derulo",
        music:"./music/Colors.mp3"
    },
    {
        name:"Devil Eyes",
        rasmi:"./img/devil.jpg",
        singer:"Hippie Sabotage",
        music:"./music/devil.mp3"
    },
    {
        name:"Underfined",
        rasmi:"./img/forever.jpg",
        singer:"SensSnoW",
        music:"./music/forever.mp3"
    },
]




select.addEventListener("change",()=>{
    if (select.value=="music1") {

        rasm.src=musicsData[0].rasmi
        nomi.textContent=musicsData[0].name
        singer.textContent=musicsData[0].singer

    } else if(select.value=="music2") {

        rasm.src=musicsData[1].rasmi

        nomi.textContent=musicsData[1].name

        singer.textContent=musicsData[1].singer

    }
    else if(select.value=="music3") {

        rasm.src=musicsData[2].rasmi

        nomi.textContent=musicsData[2].name

        singer.textContent=musicsData[2].singer

    }
    else if(select.value=="music4") {

        rasm.src=musicsData[3].rasmi

        nomi.textContent=musicsData[3].name

        singer.textContent=musicsData[3].singer

    }
    else if(select.value=="music5") {

        rasm.src=musicsData[4].rasmi

        nomi.textContent=musicsData[4].name

        singer.textContent=musicsData[4].singer

    }
    else if(select.value=="music6") {

        rasm.src=musicsData[5].rasmi

        nomi.textContent=musicsData[5].name

        singer.textContent=musicsData[5].singer

    }
    else if(select.value=="music7") {

        rasm.src=musicsData[6].rasmi

        nomi.textContent=musicsData[6].name

        singer.textContent=musicsData[6].singer

    }

})


function optiontextcontent() {

    option1.textContent=musicsData[0].name+" : "+musicsData[0].singer

    option2.textContent=musicsData[1].name+" : "+musicsData[1].singer

    option3.textContent=musicsData[2].name+" : "+musicsData[2].singer

    option4.textContent=musicsData[3].name+" : "+musicsData[3].singer

    option5.textContent=musicsData[4].name+" : "+musicsData[4].singer

    option6.textContent=musicsData[5].name+" : "+musicsData[5].singer

    option7.textContent=musicsData[6].name+" : "+musicsData[6].singer
    
}


optiontextcontent()


next.addEventListener("click",()=>{

})







next.addEventListener("click", () => {

    currentIndex = (currentIndex + 1) % musicsData.length;

    updateMusic(currentIndex);

});







prev.addEventListener("click", () => {

    currentIndex = (currentIndex - 1 + musicsData.length) % musicsData.length;

    updateMusic(currentIndex);

});







function updateMusic(index) {

    rasm.src = musicsData[index].rasmi;

    nomi.textContent = musicsData[index].name;

    singer.textContent = musicsData[index].singer;

    audio.src = musicsData[index].music;

    select.value = `music${index + 1}`;

}




audio.addEventListener('loadedmetadata', () => {

    progress.max = 100;

});



audio.addEventListener('timeupdate', () => {

    const foiz = (audio.currentTime / audio.duration) * 100;

    progress.value = foiz;

});



progress.addEventListener('input', (e) => {

    const vaqti = (e.target.value / 100) * audio.duration;

    audio.currentTime = vaqti;

});


progress.addEventListener("click", (event) => {
    const width = progress.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});