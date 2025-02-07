//change backgroud header
function scrollHeader() {
  let header = document.getElementById("header");
  if (window.scrollY >= 150) {
    header.classList.add("scrollheader");
  } else {
    header.classList.remove("scrollheader");
  }
}
window.addEventListener("scroll", scrollHeader);//done

//swiper form https://swiperjs.com/
var swiper = new Swiper(".popularContainer ", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//value accordion
let accordionItems = document.querySelectorAll(".valueAccordionItem");
accordionItems.forEach((item) => {
  let accordionHeader = item.querySelector(".valueAccordionHeader");

  accordionHeader.addEventListener("click", () => {
    let openItem = document.querySelector(".accordionOpen");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
let toggleItem = (item) => {
  let accordionContent = item.querySelector(".valueAccordionContent");
  if (item.classList.contains("accordionOpen")) {
    // If the item is open, close it
    accordionContent.style.height = 0;
    item.classList.remove("accordionOpen");
  } else {
    // If the item is closed, open it
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordionOpen");
  }
};

//scroll section and active link
let sections = document.querySelectorAll("section[id]");
function scrollActive() {
  let scrollY = window.scrollY;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop-58;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.list a[href*='${sectionId}']`)
        .classList.add("activeLinks");
    } else {
      document
        .querySelector(`.list a[href*='${sectionId}']`)
        .classList.remove("activeLinks");
    }
  });
}
window.addEventListener("scroll", scrollActive);//done

// scroll up
function scrollUp() {
  let scrolUp = document.getElementById("scrollup");
  if (this.scrollY >= 350) {
    scrolUp.classList.add("showScroll");
  } else {
    scrolUp.classList.remove("showScroll");
  }
}
window.addEventListener("scroll", scrollUp);//done

//Dark Theme:
let themeButton = document.getElementById("themeButton");
let darkTheme = "darkTheme";
let iconTheme = "bx-sun";
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//scroll reveal animation
let sr = ScrollReveal({
  orgin: "top",
  distance: "60px",
  duration: 2500,
  dely: 400,
  rest:true,
});
sr.reveal(".homeTitle,popularContainer,subContainer,footerContainer ");
sr.reveal(".homeDescription , .footerInfo", { dely: 500 });
sr.reveal(".home form", { dely: 600 });
sr.reveal(".homeValue", { dely: 700 });
sr.reveal(".homeImg", { dely: 800, orgin: "bottom" });
sr.reveal(".logosImg", { interval: 100 });
sr.reveal(".valuesImg , contactContent", { orgin: "left" });
sr.reveal(".ValueContent , contactImgs", { orgin: "right" });
