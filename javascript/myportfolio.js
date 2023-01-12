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
    projectTitleDesktop: "Top-rated-tv-shows",
    tags: ["HTML", "CSS", "Es6", "API"],
    description:
      "Allows users to engage with TV show info via an external API.Users can like shows & leave comments.It uses an involvement API to save data",
    liveUrl: "https://natasha-ct.github.io/Top-rated-tv-shows-Web-app/dist/",
    sourceUrl: "https://github.com/NATASHA-ct/Top-rated-tv-shows-Web-app",
    image: "./images/projects/tv.png",
  },

  {
    projectTitle: "project2",
    projectTitleDesktop: "Daily Planner",
    tags: ["Html", "CSS", "JavaScript", "Linter"],
    description:
      "A webapp for To-Do tasks built using webpack with functionality to add, remove, mark items as complete, and remove all completed items at once.",
    liveUrl: "https://dulcet-churros-bc7c19.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/Daily-planner",
    image: "./images/projects/todo .png",
  },

  {
    projectTitle: "project3",
    projectTitleDesktop: "Online Shop",
    tags: ["CSS", "HTML", "ES6", "React"],
    description:
      "Web app for viewing & filtering products using external API, incl. list of products & detailed info pages. Users can filter & view metrics for specific criteria.",
    liveUrl: "https://prismatic-banoffee-c996a7.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/onlineshop",
    image: "./images/projects/onlineshop.png",
  },
  {
    projectTitle: "project4",
    projectTitleDesktop: "Digital Library",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Web app using React & Redux to view, add, & remove books, test using Jest. Offers simple way to manage book collection",
    liveUrl: "https://deft-seahorse-76e953.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/DigitalLibrary",
    image: "./images/projects/lib.png",
  },

  {
    projectTitle: "project5",
    projectTitleDesktop: "Online Math Calculator",
    tags: ["HTML", "CSS", "Es6", "React"],
    description:
      "Single Page App for math calculations & reading random math related quotes, offering quick access to simple tools and resources",
    liveUrl: "https://phenomenal-rugelach-2147c0.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/REACT-Math-Calculator",
    image: "./images/projects/maths.png",
  },
  {
    projectTitle: "project6",
    projectTitleDesktop: "Business-Seminar-Website",
    tags: ["HTML", "CSS", "Es6", "Webpack"],
    description:
      "Business seminar website with info on dates, speakers, tickets, location. Goal is to help achieve productivity & balance in work & life.",
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

                <div class="description layer">
                    <h3 class="project-title">${portfolioObjects[projectsIndex].projectTitleDesktop}
                    </h3>
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
                    <div class="proj-btns">
                      <button type="button" class="button "><a href="${portfolioObjects[projectsIndex].liveUrl}">Live Preview</a></button>
                      <button type="button" class="button SeeSource"><a href="${portfolioObjects[projectsIndex].sourceUrl}">Source Code</a></button>
                    </div>
             
                
                </div>
            </article>`;
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
const contactForm = document.getElementById("contact_form").reset();
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
    
    document.getElementById("contact_form").reset();
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
// ....................

const boxes = document.querySelectorAll('.box') 
window.addEventListener('scroll',checkBoxes);
 console.log(checkBoxes());

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}