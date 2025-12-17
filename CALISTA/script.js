const loader = document.getElementById("loader");
setTimeout(() =>{
 loader.classList.add("Fade-out")
  setTimeout(() =>{
    document.body.classList.remove("no-anim");
    loader.style.display='none';
  },1000)
},2000)