import './index.css'
import gsap from 'gsap';

let Firstpart = document.querySelector('#firstpart')

Firstpart.innerHTML = `
    <div class="firstlayer">
         <h2>negative.</h2>
         <div class="navbar">
           <a href="#">home</a>
           <a href="https://github.com/HavannaOnana">about me </a>
           <button href="#" class="playlist">playlist</button>
         </div>
    </div>

    <div class="firstparttext">
        <h1>Kendrick<br>Lamar</h1>
        <button type="button" class='explore'>explore</button>
    </div>

    <p class="info">Kendrick Lamar Duckworth is an American rapper, songwriter, and record producer.<br>
       He is regarded as one of the most skillful and successful hip hop artists<br> of his generation, with various media outlets<br> branding him the \`new king of hip hop\`</p>
`;

//adding GSAP animations
document.addEventListener('DOMContentLoaded',()=>{
  gsap.from(".firstparttext", {
    duration: 4,
    y: -50,
    opacity: 0,
    ease: "power1.out",
  });

  // the p text too
  gsap.from(".info", {
    duration: 4,
    y: -50,
    opacity: 0,
    ease: "power1.out",
  });

   gsap.from(".firstlayer", {
     duration: 4,
     y: -50,
     opacity: 0,
     ease: "power1.out",
   });

})

let kendrickAbout = document.querySelector("#about");
kendrickAbout.innerHTML = `
  
 <!--text-->
      <div class="kendrick">
         <h1>Kendrick</h1>
         <p>Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter.<br>
           Regarded as one of the most influential hip-hop artists of his generation<br>, and one of the greatest rappers of all time, he is known for his<br> technical artistry and complex songwriting. He was awarded the 2018<br> Pulitzer Prize for Music, becoming the first musician outside of the classical<br> and jazz genres to receive the honor. </p>
        <a href="#">Kendrick Wikipedia</a>
      </div>

      <!--video-->
      <div class="video">
          <!--div for icons-->
          
          <div class="icons">
            <ion-icon name="medical" class='icon'></ion-icon>
            <h3>about kendrick</h3>
          </div>
          <video autoplay muted loop class="background-video" disablePictureInPicture>
              <source src="/images/kendrickvideo.mp4" type="video/mp4">
              Your browser does not support the video tag.
          </video>
      </div>

`;

let exploreButton = Firstpart.querySelector(".explore");
let kendrickDiv = kendrickAbout.querySelector(".kendrick");
let videoDiv = kendrickAbout.querySelector(".video");

function animationKendrickAbout(){

   gsap.set(kendrickDiv, { x: 0, opacity: 1 });
   gsap.set(videoDiv, { x: 0, opacity: 1 });

  gsap.from(kendrickDiv,{
    duration :3,
    x : -200,
    opacity:1,
    ease: "power1.out"
  })

  gsap.from(videoDiv,{
    duration :3 ,
    x : 200,
    opacity :1,
    ease : "power1.out"
  })

}
//console.log(kendrickDiv, videoDiv);

let animationTriggered = false;
//window to check if user scrolled past windowpx
window.addEventListener('scroll',()=>{
  if (window.scrollY > 0 && !animationTriggered) {
    animationKendrickAbout();
    console.log("working");
    animationTriggered = true;
  }
})

exploreButton.addEventListener('click',function(){
  window.scroll({top:700,behavior:"smooth"});
  animationTriggered = true
  gsap.from(animationKendrickAbout(),{ease:"power1.in"})
  console.log("button click")
})


//reducing the audio
var audio  = document.getElementById("audio")
audio.volume = 0.1



//rotating the icon-icon 
let rotateIcon = kendrickAbout.querySelector(".icon")
gsap.from(rotateIcon,{duration:2,rotation:360,repeat:-1,ease:"linear"});



const logos = document.querySelector(".logos");
logos.innerHTML = `
   <img src="../public/images/logos/negative one.png" alt="">
      <img src="../public/images/logos/negative.png" alt="">
      <img src="../public/images/logos/nike.png" alt="">
      <img src="../public/images/logos/pharrel williams.png" alt="">
      <img src="../public/images/logos/pllang.png" alt="">
      <img src="../public/images/logos/t-minus.png" alt="">
`;

const clone = logos.innerHTML;
const totalWidth = logos.scrollWidth; 


logos.innerHTML += clone;
logos.style.width = totalWidth + "px";

gsap.fromTo(logos,{
  x:0
},{
  x:-totalWidth/2,
  duration:8,
  ease : "none",
  repeat : -1
})

//collaborations

let collaborations = document.querySelector(".collaborations");
collaborations.innerHTML = `
  
   <h1>Top 3 Collaborations</h1>
      <!--artists-->
      <div class="artists">
         <!--jayrock-->
         <div class="jayrock">
           <div class="jayrocktext">
              <h2>jay rock</h2>
              <p>Johnny Reed McKinzie Jr. (born March 31, 1985),<br> better known by
              his stage name Jay Rock, is <br>an American rapper from Los<br> Angeles, California.</p>
            <a href="https://en.wikipedia.org/wiki/Jay_Rock">Info</a>
           </div>
         </div>
         <!--sza-->
         <div class="sza">
            <div class="szatext">
              <h2>SZA</h2>
              <p>Solána Imani Rowe (born November 8, 1989),<br> known professionally 
              as SZA is an American<br> singer-songwriter.</p>
              <a href="https://nl.wikipedia.org/wiki/SZA">Info</a>
            </div>
         </div>
         <!--schoolboy-->
         <div class="schoolboy">
          <div class="schoolboytext">
            <h2>Schoolboy</h2>
            <p>Quincy Matthew Hanley (born October 26, 1986),<br> better known by his stage name Schoolboy Q <br>(stylized as ScHoolboy Q), is<br> an American rapper from South</p>
            <a href="https://en.wikipedia.org/wiki/Schoolboy_Q">Info</a>
          </div>

         </div>
      </div>
`;


let artist = collaborations.querySelector(".artists");
console.log(artist)

function collaborationsMovement() {
   gsap.set(artist, { y: 0, opacity: 1 });
  gsap.from(artist, {
    duration: 4,
    opacity: 0,
    y: 20,
    ease: "power1.out",
  });
}

let checkcollab = false

// Add scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 800 && !checkcollab) {
    // Adjust this value as needed
    console.log("working collab");
    collaborationsMovement();
    checkcollab = true
  }
});

// adding the colloborationtext
let Colloborationtext = document.querySelector(".collaborations_text");
Colloborationtext.innerHTML = `
   
  Kendrick Lamar has collaborated with a wide range of artists across genres,<br> showcasing his versatility and lyrical genius. Notable collaborations include tracks with SZA ("All the<br> Stars"), Rihanna ("LOYALTY."), Beyoncé ("Freedom"), and Taylor Swift ("Bad Blood Remix"), blending<br> hip-hop with R&B and pop. He’s also worked with rap heavyweights like Jay Rock ("King's Dead"), Eminem ("Love Game")etc.

`;

// gnx album
let GNX = document.querySelector(".gnx");
GNX.innerHTML = `
  <h1>Kendrick's Latest Album</h1>
      <!--gnxtext-->
      <div class="gnxtext">
        <img src="/images/gnx.png" alt="" class='gnximage'>
        <div class="gnxalbum">
          <div class="header">
            <h2>Gnx</h2> 
            <ion-icon name="star" class="star"></ion-icon></div>
          <div class="songs">
            <a href="https://youtu.be/U8F5G5wR1mk?si=RHUYEm4ywC7X0Q2M">1. Tv Off</a>
            <hr>
            <a href="https://youtu.be/YwUQ_5iV9pY?si=uZHsVc0nyX-1z9Ik">2. Wacced out murals</a>
            <hr>
            <a href="https://youtu.be/fuV4yQWdn_4?si=o9Rd05xCkRzTOL4S">3. Squabble Up</a>
            <hr>
            <a href="https://youtu.be/HfWLgELllZs?si=FBxKauU-0lkOq9et">4. Luther</a>
            <hr>
            <a href="https://youtu.be/wiALRpD0Ztg?si=1od30p3N_ngQmN8U">5. Man at the garden</a>
            <hr>
            <a href="https://youtu.be/9PumlOWjXMM?si=iyuSckQ8ZzRAX81y">6. Hey now</a>
            <hr>
            <a href="https://youtu.be/Ek7UvQPCQnE?si=FszUyJtHtn68klm3">7. Reincarnated</a>
            <hr>
            <a href="https://youtu.be/c7y2ziOBA1s?si=llD74J1s8HbLGDP6">8. Dodger Blue</a>
            <hr>
            <a href="https://youtu.be/cbHkzwa0QmM?si=SSMcb0lNLZ7zMZkm">9. Peakaboo</a>
            <hr>
            <a href="https://youtu.be/m-PO1_fzxVM?si=AYX27AkeOqIaY_Bg">10. Heart pt6.</a>
            <hr>
            <a href="https://youtu.be/8sfLudpdZPU?si=_o5oOU67ms0j2U6X">11. GNX</a>
            <hr>
            <a href="https://youtu.be/G5YwhjCywvw?si=yCCG8ag0UfAT0B7f">12. Gloria</a>
          </div>
        </div>
      </div>
`;

let gnxStar = GNX.querySelector(".star");
gsap.from(gnxStar, {
  duration: 2,
  rotation: 360,
  repeat: -1,
  ease: "linear",
});

let gnxImage = GNX.querySelector(".gnximage");
let gnxSong = GNX.querySelector(".songs");
let gnxHeader = GNX.querySelector(".header");


let checkGnx = false;

let Playlist = Firstpart.querySelector(".playlist");
//console.log(Playlist)

Playlist.addEventListener("click", ()=> {
  window.scroll({ top: 2200, behavior: "smooth" });
  checkGnx = true;
  gsap.to(gnxAnimation(), { ease: "power1.in" });
  console.log("playlist done")
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1300 && !checkGnx) {
    console.log("working gnx");
    gnxAnimation();
    checkGnx = true;
  }
});

function gnxAnimation(){

  gsap.set(gnxImage, { x: 0, opacity: 1 });
  gsap.set(gnxSong, { x: 0, opacity: 1 });
  gsap.set(gnxHeader, { x: 0, opacity: 1 });

   gsap.from(gnxImage, {
     duration: 3,
     x: -200,
     opacity: 1,
     ease: "power1.out",
   });

   gsap.from(gnxSong, {
     duration: 3,
     x: 200,
     opacity: 1,
     ease: "power1.out",
   });

   gsap.from(gnxHeader, {
     duration: 3,
     x: 200,
     opacity: 1,
     ease: "power1.out",
   });

}


let footer = document.querySelector(".footer");

footer.innerHTML = `
  
    <div class="footericons">
        <ion-icon name="logo-amazon"></ion-icon>
        <ion-icon name="logo-apple"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-reddit"></ion-icon>
        <ion-icon name="logo-twitch"></ion-icon>
      </div>
      <h2>negative</h2>
      <p>&copy;2024  Godrine Manu</p>

`;


