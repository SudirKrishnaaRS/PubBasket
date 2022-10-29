document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
      <div class="carousel__nav">
          ${buttonsHtml.join("")}
      </div>`
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // Unselect all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        // Adding when selecting
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    //   By default we are making item 1 to be visible by adding the selected class to items[0],buttons[0]
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
    console.log(buttonsHtml);
  });
  