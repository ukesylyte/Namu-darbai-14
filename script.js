const tabs = document.getElementsByClassName("tab")
const h1 = document.querySelector("h1")
const buttons = document.getElementsByTagName("button")

for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none"
}

buttons[0].classList.add("selected")
tabs[0].style.display = "block"

function showTab(evt, id) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
        buttons[i].classList.remove("selected")
        evt.currentTarget.classList.add("selected");
    }
    document.getElementById(id).style.display = "block"
    evt.currentTarget.classList.add("selected")
}
