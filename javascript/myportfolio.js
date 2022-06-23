const menu = document.querySelector(".menu");

const navlist = document.querySelector(".nav-list");

// Adding click event to the hamburger

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

// Adding event to close icon on menu
document.querySelector(".close-icon").addEventListener("click", () => {
  menu.classList.remove("active");

  navlist.classList.remove("active");
});

//popup menu------------------------------------------------------------------------------------------
const allprojects = document.querySelector(".all-projects");

const portfolioObjects = [
  {
    projectTitle: "project1",
    projectTitleDesktop: "Multi-Post Stories",
    tags: ["CSS", "HTML", "Bootstrap", "Ruby"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    // liveUrl:
    // sourceUrl:
  },

  {
    projectTitle: "project2",
    projectTitleDesktop: "Multi-Post Stories",
    tags: ["CSS", "HTML", "Bootstrap", "Ruby"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    // liveUrl:
    // sourceUrl:
  },
  {
    projectTitle: "project3",
    projectTitleDesktop: "Multi-Post Stories",
    tags: ["CSS", "HTML", "Bootstrap", "Ruby"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    // liveUrl:
    // sourceUrl:
  },
  {
    projectTitle: "project4",
    projectTitleDesktop: "Multi-Post Stories",
    tags: ["CSS", "HTML", "Bootstrap", "Ruby"],
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    // liveUrl:
    // sourceUrl:
  },
];
console.log(portfolioObjects[3])


//Adding projects section to the html file
const modal= () => {
  let cardportfolioObjects = "";

  for (let projectsIndex = 0; projectsIndex < portfolioObjects.length;projectsIndex++ ) {

    const card = `
          
            <article id="${portfolioObjects[projectsIndex].projectTitle}" class="project-container">

                <img class="project-image" src="./images/mobile/Img Placeholder.png" alt="project placeholder image">
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
                    <button type="button" class="button see-prj">See Project</button>
                    </div></article>
                </div>`;
    cardportfolioObjects += card;
  }
  allprojects.innerHTML = cardportfolioObjects;
};
modal();


//-------------MODAL POPUP---------------------------
 
const open = document.querySelectorAll(".see-prj");
 
open.forEach(btn =>{
 
btn.addEventListener("click", () => {
         
     
      const modalpopup = document.querySelector(".modalpopup");
       
      modalpopup.innerHTML = `
     
        <article id="popup" class="modal-article">
 
              <h3 class="modal-title">
                  ${portfolioObjects[0].projectTitleDesktop}
                  <img src="./images/close.png" class="close-icon close2" id="close2">
              </h3>
 
              <img
                class="modal-image"
                src="./images/mobile/modalImgPlaceholder.png"
                alt="project placeholder image"
              ></img>
              <div class="modal-description">
 
                
                <p class="modal-infor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy .Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."</p>
 
                <ul class="modal-tools used-tools">
                  <li class="project-list">html</li>
                  <li class="project-list">Ruby on rails</li>
                  <li class="project-list">css</li>
                  <li class="project-list modal-tool-last">Github</li>
                </ul>
 
                <div class="modal-buttons">
 
                <button type="button" class="button SeeLive">
                  See Live
                  <img class="fa" src="./images/mobile/SOCIAL-ICONS/seelive.png" alt="seelive icon">
                </button>
                
                <button type="button" class="button SeeSource">
                   See Source
                  <img class="fa" src="./images/mobile/SOCIAL-ICONS/github.png" alt="github icon">
                </button>
                </div>
              </div>
          </article>
    
      `;
      
      allprojects.appendChild(modalpopup);

 //close icon
     const close = document.querySelector("#close2");

      close.addEventListener("click", () => {

        modalpopup.innerHTML= ``;
      
    });
    });
    });
 