// Pause animations when page loads
document.body.classList.add("no-anim");
const loader = document.getElementById("loader");

// Fade out loader after 2 seconds
setTimeout(() => {

    loader.classList.add("fade-Out");

    // Wait for fade-out to finish (1 second)
    setTimeout(() => {
        loader.style.display = "none";

        // Start all animations
        document.body.classList.remove("no-anim");

    }, 1000);

}, 2000);

 const frontendModal = document.getElementById("frontend-modal");

 const backendModal = document.getElementById("backend-modal");

 const fluterModal = document.getElementById("flutter-modal");

 const closeFrontEnd = document.getElementById("close-frontend");

 const closebackEnd = document.getElementById("close-backend");

 const closeFlutter = document.getElementById("close-flutter");

 const openFrontEnd = document.getElementById("open-FrontEnd");

 const FT = document.querySelector(".ft"); // FRONT-END TO Make Tools Slide In
 const BT = document.querySelector(".bt"); // BACK-END TO Make Tools Slide In
 const FLT = document.querySelector(".flt"); // FLUTTER TO Make Tools Slide In
 

 const openBackend = document.getElementById("open-backend");
 
 const openFlutter = document.getElementById("open-flutter");

//  OPEN BTN FUNCTIONS FE
openFrontEnd.addEventListener("click", () => {
    setTimeout( () =>{
        frontendModal.style.display='flex'
    frontendModal.classList.add("open");
    setTimeout(() => {
        FT.classList.add("tools")
    })
    },0.1)
});
// CLICK ON BACKGROUND TO CLOSE
frontendModal.addEventListener("click", (e) => {
    if(e.target === frontendModal){
        frontendModal.style.display="none";
    }
})
closeFrontEnd.addEventListener("click", () => {
    frontendModal.style.display='none';
})
openBackend.addEventListener("click", () => {
    setTimeout( () => {
        backendModal.style.display="flex"
        backendModal.classList.add("open");
        setTimeout( () => {
            BT.classList.add("tools")
        })
    },0.1)
})
// CLICK ON BACKGROUND TO CLOSE
backendModal.addEventListener("click", (e) => {
    if(e.target === backendModal){
        backendModal.style.display='none';
    }
})
closebackEnd.addEventListener("click", () => {
    backendModal.style.display='none';
})
openFlutter.addEventListener("click", () => {
    setTimeout( () => {
        fluterModal.style.display="flex"
        fluterModal.classList.add("open");
        setTimeout( () => {
            FLT.classList.add("tools")
        })
    },0.1)
})
closeFlutter.addEventListener("click", () => {
    fluterModal.style.display="none"
})
// CLICK ON BACKGROUND TO CLOSE
fluterModal.addEventListener("click", (e) =>{
    if(e.target === fluterModal){
        fluterModal.style.display='none'
    }
})