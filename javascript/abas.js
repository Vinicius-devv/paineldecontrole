
let tabs = document.querySelectorAll(".content")
let tabContents = document.querySelectorAll("tab-content")

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("ativo")
        })
        tabs.forEach((tab) => {
            tab.classList.remove("ativo")
        })
        tabContent[index].classList.add("ativo")
        tabs[index].classList.add("ativo")
    })
})