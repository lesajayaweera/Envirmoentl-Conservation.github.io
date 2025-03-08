function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    
    const section=document.querySelector('#section')

    section.classList.toggle("toggled")
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  }