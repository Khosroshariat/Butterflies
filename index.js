// turn page when click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((elm) => {
    elm.onclick = () => {
        const pageTurnId = elm.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
        }
        else{
            pageTurn.classList.add('turn');
        }
    }
})

// dropdwon menubar

function openMenu() {
  const openmenu = document.querySelector(".menubar")
  openmenu.style.display = "flex"
}

function closeMenu() {
  const openmenu = document.querySelector(".menubar")
  openmenu.style.display = "none"
}

//  making Butterflies and animate them 

const bodyEl = document.querySelector('.second-page')

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX
  const yPos = event.offsetY

  const text = document.querySelector(".text")
  text.style.animation = "text-animate 5s ease"
  setTimeout (() => {
    text.style.opacity = "0"
  },3000)

  const text1 = document.querySelector(".text-1")
  text1.style.animation = "text1 4s infinite"
  text1.style.opacity = "1"

  const butterflies = document.createElement("h4")
  butterflies.style.left = xPos + "px";
  butterflies.style.top = yPos + "px";

  const size = Math.random()*40;
  butterflies.style.width = size + "px"
  butterflies.style.height = size + "px"

  bodyEl.appendChild(butterflies)

  setTimeout (() => {
    butterflies.remove()
  },3500)
})
