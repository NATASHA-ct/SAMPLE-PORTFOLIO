const menu = document.querySelector(".menu");

const navlist = document.querySelector(".nav-list");

// ............ Adding click event to the hamburger.........................

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  navlist.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");

    navlist.classList.remove("active");
  })
);

// ............Adding event to close icon on menu.............................
document.querySelector(".close-icon").addEventListener("click", () => {
  menu.classList.remove("active");

  navlist.classList.remove("active");
});

// ...........Popup menu for harmburger........................................
const allprojects = document.querySelector(".all-projects");

// Array of Objects with projects area properties
const portfolioObjects = [
  {
    projectTitle: "project1",
    projectTitleDesktop: "Top-rated-tv-shows-Web-app",
    tags: ["HTML", "CSS", "Es6", "REST API"],
    description:
      " A web application based on an external API which contains information about TV shows.The user can like the shows that  and comments on what they think about it.I made use of the involvement API to save this interaction information.",
    liveUrl: "https://natasha-ct.github.io/Top-rated-tv-shows-Web-app/dist/",
    sourceUrl: "https://github.com/NATASHA-ct/Top-rated-tv-shows-Web-app",
    image: "./images/projects/tv.png",
  },

  {
    projectTitle: "project2",
    projectTitleDesktop: "Budget- App",
    tags: ["Ruby", "Ruby on Rails", "Postgresql", "CSS3"],
    description:
      " A web application that allows users to keep track of their expenses and categories. have a list of transactions associated with a category, so that the user can see how much money it spent and on what. Manage your own money, manage your own life.",
    liveUrl: "",
    sourceUrl: "https://github.com/NATASHA-ct/budget-app",
    image: "./images/projects/budget.png",
  },

  {
    projectTitle: "project3",
    projectTitleDesktop: "Online Shop",
    tags: ["CSS", "HTML", "JavaScript ES6", "React"],
    description:
      "A web application based on an external API which contains information about Products for sell. The web app allows the user to view one page with a list of Products that could be filtered by some parameters. it's a list of metrics that can be filtered by each specific item on sell. It also shows one page for the item details.",
    liveUrl: "https://prismatic-banoffee-c996a7.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/onlineshop",
    image: "./images/projects/onlineshop.png",
  },
  {
    projectTitle: "project4",
    projectTitleDesktop: "Digital Library",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description:
      " A webapp that allows the user to: Display a list of books. Add a new book. Remove a selected book.It has been developed using React Redux and tested using Jest.",
    liveUrl: "https://deft-seahorse-76e953.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/DigitalLibrary",
    image: "./images/projects/digitallib.png",
  },

  {
    projectTitle: "project5",
    projectTitleDesktop: "Online Math Calculator",
    tags: ["HTML", "CSS", "Es6", "React"],
    description:
      "It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.",
    liveUrl: "https://phenomenal-rugelach-2147c0.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/REACT-Math-Calculator",
    image: "./images/projects/maths.png",
  },
  {
    projectTitle: "project6",
    projectTitleDesktop: "Business-Seminar-Website",
    tags: ["HTML", "CSS", "Es6", "Webpack"],
    description:
      "Business-Seminar-Website with information about dates , speakers, tickets, attendance location. It will help people to be productive at work while still having a life outside of it.",
    liveUrl: "https://natasha-ct.github.io/Business-Seminar-Website/",
    sourceUrl: "https://github.com/NATASHA-ct/Business-Seminar-Website",
    image: "./images/projects/business.png",
  },
];

// .........Adding projects section to the html file..................................
const modal = () => {
  let cardportfolioObjects = "";

  for (
    let projectsIndex = 0;
    projectsIndex < portfolioObjects.length;
    projectsIndex += 1
  ) {
    const card = `
          
            <article id="${portfolioObjects[projectsIndex].projectTitle}" class="project-container">

                <img class="project-image" src="${portfolioObjects[projectsIndex].image}" alt="project placeholder image">
                </img>

                <div class="description">
                    <h3 class="project-title">${portfolioObjects[projectsIndex].projectTitleDesktop}
                    </h2>
                    <p class="project-infor">${portfolioObjects[projectsIndex].description}</p>
                    <ul class="used-tools">
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[0]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[1]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[2]}
                        </li>               
                        <li class="project-list">
                            ${portfolioObjects[projectsIndex].tags[3]}
                        </li>  
                    </ul>
                    <button type="button" class="see-prj" data-index="0">See Project</button>
                    </div></article>
                </div>`;
    cardportfolioObjects += card;
  }
  allprojects.innerHTML = cardportfolioObjects;
};
modal();

// ...............MODAL POPUP for see project button....................
const open = document.querySelectorAll(".see-prj");

open.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const modalpopup = document.querySelector(".modalpopup");

    modalpopup.innerHTML = `
             <article id="popup" class="modal-article">
 
              <h3 class="modal-title">
                  ${portfolioObjects[index].projectTitleDesktop}
                  <img src="./images/close.png" class="close-icon close2" id="close2">
   
              </h3>
 
              <img
                class="modal-image"
                src="${portfolioObjects[index].image}"
                alt="project placeholder image"
              ></img>
              <div class="modal-description">
 
                
                <p class="modal-infor">${portfolioObjects[index].description}</p>
 
                <ul class="modal-tools used-tools">
                
                        <li class="project-list">
                            ${portfolioObjects[index].tags[0]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[index].tags[1]}
                        </li>
                        <li class="project-list">
                            ${portfolioObjects[index].tags[2]}
                        </li>               
                        <li class="project-list">
                            ${portfolioObjects[index].tags[3]}
                        </li>  
                    
                  </ul>
 
                <div class="modal-buttons">
 
                <button type="button" class="button ">
                  <a href="${portfolioObjects[index].liveUrl}">See Live</a>
                </button>
                
                <button type="button" class="button SeeSource">
                   <a href="${portfolioObjects[index].sourceUrl}">See Source</a>
                </button>
                </div>
              </div>
          </article>
    
      `;

    allprojects.appendChild(modalpopup);

    // close icon
    const close = document.querySelector("#close2");

    close.addEventListener("click", () => {
      modalpopup.innerHTML = "";
    });
  });
});

// .................... Contact validation form...................
const contactForm = document.getElementById("contact_form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error_message");

// Checking for any non alphabetic numbers
const checkLowerCase = (email) => {
  const validateLowerCase = /[A-Z]/g;

  if (validateLowerCase.test(email)) {
    return false;
  }
  return true;
};

// Submitting client data after correct validation with no errors

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkLowerCase(email.value.trim())) {
    contactForm.submit();
    errorMsg.style.display = "none";
    email.className = "email";

    // Display error message for invalid email
  } else {
    errorMsg.style.display = "block";
    email.className = "error";
  }
});

// .................Preserving data using local storage........

let clientName = document.getElementById("name");
let clientEmail = document.getElementById("email");
let message = document.getElementById("textarea");

// Adding listner for event handling
contactForm.addEventListener("input", () => {
  localStorage.setItem("Name", `${clientName.value}`);
  localStorage.setItem("Email", `${clientEmail.value}`);
  localStorage.setItem("TextArea", `${message.value}`);
});
// get values from local storage
clientName.value = localStorage.getItem("Name");
clientEmail.value = localStorage.getItem("Email");
message.value = localStorage.getItem("TextArea");
