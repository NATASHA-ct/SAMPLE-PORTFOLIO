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
    tags: ["HTML", "CSS", "Es6", "REST API"],
    description:
      "A web application that allows users to engage with information about TV shows through an external API. The application enables users to like TV shows and leave comments about their thoughts on them.An involvement API was utilized to save this engagement data.",
    liveUrl: "https://natasha-ct.github.io/Top-rated-tv-shows-Web-app/dist/",
    sourceUrl: "https://github.com/NATASHA-ct/Top-rated-tv-shows-Web-app",
    image: "./images/projects/tv.png",
  },

  {
    projectTitle: "project2",
    projectTitleDesktop: "Budget- App",
    tags: ["Ruby", "Ruby", "Postgresql", "CSS3"],
    description:
      " A web application that helps users manage their expenses by categorizing them and keeping track of transactions. The application allows the user to see how much money they have spent in each category, helping them to make informed decisions about their spending habits. The goal of the application is to empower users to take control of their finances and manage their lives effectively.",
    liveUrl: "",
    sourceUrl: "https://github.com/NATASHA-ct/budget-app",
    image: "./images/projects/budget.png",
  },

  {
    projectTitle: "project3",
    projectTitleDesktop: "Online Shop",
    tags: ["CSS", "HTML", "ES6", "React"],
    description:
      "A web application app that allows users to view and filter a list of products for sale using an external API. The application includes a page with a list of products that can be filtered using various parameters, as well as a page displaying detailed information about each individual product. The user can use the application to view metrics and find products that meet their specific criteria.",
    liveUrl: "https://prismatic-banoffee-c996a7.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/onlineshop",
    image: "./images/projects/onlineshop.png",
  },
  {
    projectTitle: "project4",
    projectTitleDesktop: "Digital Library",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "A web application developed using React and Redux that allows users to view a list of books, add new books, and remove selected books. The application has been tested using Jest. It provides users with a simple and convenient way to manage their book collection.",
    liveUrl: "https://deft-seahorse-76e953.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/DigitalLibrary",
    image: "./images/projects/digitallib.png",
  },

  {
    projectTitle: "project5",
    projectTitleDesktop: "Online Math Calculator",
    tags: ["HTML", "CSS", "Es6", "React"],
    description:
      "This a Single Page Application that allows users to perform simple calculations and read random quotes related to math. This app provides a quick and easy way for users to access these simple tools and resources.",
    liveUrl: "https://phenomenal-rugelach-2147c0.netlify.app/",
    sourceUrl: "https://github.com/NATASHA-ct/REACT-Math-Calculator",
    image: "./images/projects/maths.png",
  },
  {
    projectTitle: "project6",
    projectTitleDesktop: "Business-Seminar-Website",
    tags: ["HTML", "CSS", "Es6", "Webpack"],
    description:
      "Business-Seminar-Website that provides information about the event, including the dates, speakers, tickets, and attendance location. The goal of the seminar is to help people be productive at work while still maintaining a healthy work-life balance.",
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