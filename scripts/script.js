// JavaScript Document
console.log("hi");


var menubutton = document.querySelector("nav:first-of-type button");
var menu = document.querySelector("nav:nth-of-type(2");

menubutton.onclick = toggleMenu;

function toggleMenu() {
  menu.classList.toggle("toonMenu");
  console.log("open menu werkt");
}


// Ik heb dit stukje code van Donna, het is een intersect functie die detecteerd wanner er text in beeld komt, en er dan voor zorgt dat die tekst word geanimeerd.
// https://codepen.io/d0nnaz/pen/qBgJNON

document.addEventListener("DOMContentLoaded", function() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const listItems = document.querySelectorAll('section:last-of-type li');

    listItems.forEach(item => {
      observer.observe(item);
    });

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }
  });


