//Параметры каталога (аккордеон)

const parameters = document.querySelectorAll(".aside-filter__item-drop"),
  values = document.querySelectorAll(".aside-filter__list--drop");
values.forEach((value) => {
  value.classList.add("fade");
});

parameters.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("parameter-active");
  });
});
