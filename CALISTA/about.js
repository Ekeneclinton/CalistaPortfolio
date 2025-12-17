const loader = document.querySelector(".loader")
document.body.classList.add("no-Anim")
setTimeout(() => {
  loader.classList.add("fadeOut");
  setTimeout(() => {
    loader.style.display='none';
    document.body.classList.remove("no-Anim");
  },1000)
},2000);
