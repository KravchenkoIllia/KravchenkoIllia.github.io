const accordionTitle = document.querySelector('.accordion__title');
const accordionList = document.querySelector('.accordionc__list');

accordionTitle.addEventListener("click", function () {
    if(accordionList.classList.contains("visible")) {
        accordionList.classList.remove("visible");
    } else {
        accordionList.classList.add("visible");
    }
});