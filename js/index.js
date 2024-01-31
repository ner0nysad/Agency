document.addEventListener("click", function (event) {
  if (
    event.target &&
    (event.target.className === "header__icon" ||
      event.target.className === "header__icon-span")
  ) {
    document.querySelector(".header").classList.toggle("header-active");
  }
  if (
    event.target &&
    (event.target.className === "faq__card-button" ||
      event.target.className === "faq__card-button-image")
  ) {
    event.target.closest(".faq__card").classList.toggle("faq__card-open");
  }
  if (
    event.target &&
    (event.target.className === "accordion__item" ||
      event.target.className === "accordion__button-image")
  ) {
    event.target
      .closest(".accordion__item")
      .classList.toggle("accordion__item-open");
  }
  if (
    event.target &&
    (event.target.className === "portfolio__menu-element" ||
      event.target.className === "portfolio__menu-element-sup")
  ) {
    const cards = document.querySelectorAll(".portfolio__card");
    const all = document.querySelector(".portfolio__cards");
    const tabs = document.querySelectorAll(".portfolio__menu-element");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("portfolio__menu-list-active");
    }
    event.target.classList.add("portfolio__menu-list-active");

    if (event.target.getAttribute("id") === "all") {
      all.classList.remove("portfolio__cards-flex");
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("portfolio__card-hidden")) {
          cards[i].style.cssText = ``;
          setTimeout(() => {
            cards[i].classList.remove("portfolio__card-hidden");
          }, 100);
        }
      }
    } else {
      all.classList.add("portfolio__cards-flex");

      for (let i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute("id") === event.target.getAttribute("id")) {
          if (cards[i].classList.contains("portfolio__card-hidden")) {
            cards[i].style.cssText = ``;
            setTimeout(() => {
              cards[i].classList.remove("portfolio__card-hidden");
            }, 200);
          }
        } else {
          if (!cards[i].classList.contains("portfolio__card-hidden")) {
            cards[i].classList.add("portfolio__card-hidden");
            setTimeout(() => {
              cards[i].style.cssText = `display: none;`;
            }, 450);
          }
        }
      }
    }
  }
});
