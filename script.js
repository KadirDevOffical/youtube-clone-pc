const root = document.querySelector(":root")
const pcontent = document.querySelector(".profile-content")
const modal = document.querySelector(".navbar-modal")
const chngthm = document.querySelector(".chng-thm")
const arrow = document.querySelector(".left-nav-btn")
const leftnav = document.querySelector(".left-bar")
const videotitle = document.querySelector(".left-video")
const channelstitle = document.querySelector(".channels")
const infotitle = document.querySelector(".info-title")
const infodesc = document.querySelector(".bottom-infos")
const channelsdesc = document.querySelector(".channels-info")
const welcome = document.querySelector(".welcome-text")
const welcomedesc = document.querySelector(".welcome-span")

var modalclick = "open"
var theme = "light"
var leftnavclick = "close"

function leftbarf() {
if (leftnavclick === "close") {
    leftnav.style.width = "60px"
    arrow.classList.add("fa-arrow-right")
    arrow.classList.remove("fa-arrow-left")
    videotitle.style.visibility = "hidden"
    channelstitle.style.visibility = "hidden"
    infotitle.style.visibility = "hidden"
    infodesc.style.visibility = "hidden"
    channelsdesc.style.visibility = "hidden"
    leftnavclick = "open"
    welcome.style.left = "100px"
    welcomedesc.style.left = "100px"
} 
else if (leftnavclick === "open") {
    leftnav.style.width = "170px"
    arrow.classList.add("fa-arrow-left")
    arrow.classList.remove("fa-arrow-right")
    videotitle.style.visibility = "visible"
    leftnavclick = "close"
    channelstitle.style.visibility = "visible"
    infotitle.style.visibility = "visible"
    infodesc.style.visibility = "visible"
    channelsdesc.style.visibility = "visible"
    welcome.style.left = "180px"
    welcomedesc.style.left = "180px"
}
else {
    leftnav.style.width = "170px"
    arrow.classList.add("fa-arrow-left")
    arrow.classList.remove("fa-arrow-right")
    videotitle.style.visibility = "visible"
    leftnavclick = "close"
    channelstitle.style.visibility = "visible"
    infotitle.style.visibility = "visible"
    infodesc.style.visibility = "visible"
    welcome.style.left = "180px"
    welcomedesc.style.left = "180px"
}
}

arrow.addEventListener("click", () => {
    leftbarf()
})

function active() {
    if (modalclick === "open") {
    modal.classList.add("active")
    modalclick = "close"
    } 
    else if (modalclick === "close") {
        modal.classList.remove("active")
        modalclick = "open"
    }
    else {
        modal.classList.add("active")
    modalclick = "close" 
    console.log(`The status named Ş{modalclick} was not found... swicthing to active mode.`)
    }
}

function changetheme() {
    if (theme === "light") {
        root.style.setProperty("--bg-color", "#212121")
        root.style.setProperty("--sec-color", "#292929")
        root.style.setProperty("--text-color", "white")
        root.style.setProperty("--thr-color", "#262626")
        chngthm.classList.add("fa-moon")
        chngthm.classList.remove("fa-sun")
        theme = "dark"
    } else if (theme === "dark") {
        root.style.setProperty("--bg-color", "whitesmoke")
        root.style.setProperty("--sec-color", "white")
        root.style.setProperty("--text-color", "black")
        root.style.setProperty("--thr-color", "#EBEAEA")
        theme = "light"
        chngthm.classList.remove("fa-moon")
        chngthm.classList.add("fa-sun")
    }
    else {
        root.style.setProperty("--bg-color", "whitesmoke")
        root.style.setProperty("--sec-color", "white")
        root.style.setProperty("--text-color", "black")
        theme = "light"
        chngthm.classList.remove("fa-moon")
        chngthm.classList.add("fa-sun")
    }
}


pcontent.addEventListener("click", () => {
    active()
})

chngthm.addEventListener("click", () => {
    changetheme()
})

