// turn page when click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((elm, index) => {
    elm.onclick = () => {
        const pageTurnId = elm.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index
            }, 500)
        }
    }
})


// create reverse index function
const pages = document.querySelectorAll(".book-page.page-right");
let totalPage = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPage - 1;
  }
}

// pages openning animation
const coverRight = document.querySelector(".cover.cover-right");

setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = - 1;
}, 2800);

// all pages top animation
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2700);
});

// menu bar

function openMenu() {
  const openmenu = document.querySelector(".menubar")
  openmenu.style.display = "flex"
}

function closeMenu() {
  const openmenu = document.querySelector(".menubar")
  openmenu.style.display = "none"
}

//  making heart animation 

const bodyEl = document.querySelector('.second-page')

bodyEl.addEventListener("mousemove", (event) => {
  // console.log("yessss")
  const xPos = event.offsetX
  const yPos = event.offsetY

  const text = document.querySelector(".text")
  text.style.animation = "text-animate 5s ease"
  setTimeout (() => {
    text.style.opacity = "0"
  },3000)

  const text1 = document.querySelector(".text-1")
  text1.style.animation = "bee 4s infinite"
  text1.style.opacity = "1"

  const flowerEl = document.createElement("h4")
  flowerEl.style.left = xPos + "px";
  flowerEl.style.top = yPos + "px";

  const size = Math.random()*40;
  flowerEl.style.width = size + "px"
  flowerEl.style.height = size + "px"

  bodyEl.appendChild(flowerEl)

  setTimeout (() => {
    flowerEl.remove()
  },3500)
})
