// JavaScript Document
console.log("hi");

var eersteStreepjesButton = document.querySelector("nav li:nth-of-type(1) button");

eersteStreepjesButton.onclick = eersteStreepjesButtonKlik;

function eersteStreepjesButtonKlik() {
  if (eersteStreepjesButton.ariaExpanded == "false") {
    eersteStreepjesButton.ariaExpanded = "true"
  }
  else {
    eersteStreepjesButton.ariaExpanded = "false"
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const listItems = document.querySelectorAll('section.animation li');

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