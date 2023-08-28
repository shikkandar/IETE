let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");
const scrollDistance = 150;

window.addEventListener("scroll", function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
   
    navbar.classList.remove("hide");
  } else {
    
    if (currentScrollPos > scrollDistance) {
      navbar.classList.add("hide");
    }
  }

  prevScrollPos = currentScrollPos;

  if (currentScrollPos === 0) {
    navbar.classList.remove("hide");
    navbar.classList.remove("top");
  } else {
    navbar.classList.add("top");
  }
});


