"use strict";
(function () {
  // Блокируем кнопку поиска при пустых полях
  var searchButton = document.querySelector(".device-form__button");
  searchButton.disabled = true;

  var formWrapper = document.querySelector(".device-form__wrapper");
  formWrapper.addEventListener("click", function (event) {
    var target = event.target;
    var formList = target.nextElementSibling;
    var formLabel = target.previousElementSibling;

    if (target.classList.contains("device-form__input")) {
      formLabel.classList.toggle("device-form__label--active");
      formList.classList.toggle("device-form__list--show");
    } else if (target.classList.contains("device-form__item")) {
      formList = target.parentElement;
      var formInput = formList.previousElementSibling;
      formLabel = formInput.previousElementSibling;

      formLabel.classList.remove("device-form__label--active");
      formInput.value = target.textContent;
      formInput.classList.remove("device-form__input--placeholder");
      formList.classList.remove("device-form__list--show");

    }

    // Разблокируем кнопку поиска при заполненных полях
    var firstInput = document.getElementById("form__title-1");
    var secondInput = document.getElementById("form__title-2");
    var thirdInput = document.getElementById("form__title-3");

    if (firstInput.value !== "Выберите устройство"
        && thirdInput.value !== "Выберите модель"
        && secondInput.value !== "Выберите марку") {
      searchButton.disabled = false;
    }
  });
}());
