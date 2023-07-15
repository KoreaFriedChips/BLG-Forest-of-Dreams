// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksCon = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // linksCon.classList.toggle("show-links"); // good for hard coded height

    // dynamically change the height of the nav bar when opening
    const conHeight = linksCon.getBoundingClientRect().height;
    const height = links.getBoundingClientRect().height;

    if (conHeight == 0) {
        linksCon.style.height = `${height}px`;
    }
    else {
        linksCon.style.height = 0;
    }
})

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
    const scrollH = window.pageYOffset;
    const navH = navbar.getBoundingClientRect().height;
    if (scrollH > navH) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollH > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        // prevent default (move past page)
        e.preventDefault();
        // navigate to specific spot 
        const id = e.currentTarget.getAttribute("href").slice(1); // removes the # from the href, now it's the same as id
        const element = document.getElementById(id);
        // calculate the heights (navbar, links container)
        const navH = navbar.getBoundingClientRect().height; // big screen
        const conH = linksCon.getBoundingClientRect().height; // little screen
        const fixedNav = navbar.classList.contains("fixed-nav"); // bool
        let pos = element.offsetTop - navH;
        if (!fixedNav) {
            pos -= navH;
        }
        if (navH > 82) {
            pos += conH;
        }
        window.scrollTo({
            left: 0, top: pos,
        })
        // close nav bar after click
        linksCon.style.height = 0;
    })
})
