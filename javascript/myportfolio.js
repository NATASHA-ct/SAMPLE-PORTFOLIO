const menu = document.querySelector(".menu");
console.log(menu);

const navlist = document.querySelector(".nav-list");


// Adding click event to the hamburger

menu.addEventListener("click",() => {

    menu.classList.toggle("active");

    navlist.classList.toggle("active");
}
);

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {

    menu.classList.remove("active");

    navlist.classList.remove("active");
    
}));

//Adding event to close icon on menu
document.querySelector(".close-icon").addEventListener("click", () => {
 
      menu.classList.remove("active");

      navlist.classList.remove("active");

});

