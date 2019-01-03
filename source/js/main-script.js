"use strict";

(function () {
  var ESC_KEYCODE = 27;

  var repairWrapper = document.querySelector(".page-header__repair");

  var window1 = document.getElementById("window-1");
  var window2 = document.getElementById("window-2");

  var repairButtonOne = document.getElementById("repair-button-1");
  var repairButtonTwo = document.getElementById("repair-button-2");


  repairWrapper.addEventListener("click", function (event) {
    var target = event.target;

    if (target.classList.contains("page-header__repair-button")) {
      var showWindow = target.nextSibling;

      if (window1.classList.contains("page-header__repair-window--show")) {
        window1.classList.remove("page-header__repair-window--show");

      } else if (window2.classList.contains("page-header__repair-window--show")) {
        window2.classList.remove("page-header__repair-window--show");
      }

      if (repairButtonOne.classList.contains("page-header__repair-button--active")) {
        repairButtonOne.classList.remove("page-header__repair-button--active");
      } else if (repairButtonTwo.classList.contains("page-header__repair-button--active")) {
        repairButtonTwo.classList.remove("page-header__repair-button--active");
      }

      target.classList.add("page-header__repair-button--active");
      showWindow.classList.add("page-header__repair-window--show");

      // Закрытия окна по ESC
      var closeRepairWrapper = function () {
        showWindow.classList.remove("page-header__repair-window--show");
        repairButtonOne.classList.remove("page-header__repair-button--active");
        repairButtonTwo.classList.remove("page-header__repair-button--active");
        document.removeEventListener("keydown", onRepairWrapperEscPress);
      };

      var onRepairWrapperEscPress = function (evt) {
        if (evt.keyCode === ESC_KEYCODE) {
          closeRepairWrapper();
        }
      };

      document.addEventListener("keydown", onRepairWrapperEscPress);

      // Закрытия окна по клику на крестик
      var closeWindow = showWindow.querySelector(".page-header__repair-close");
      closeWindow.addEventListener("click", function () {
        closeRepairWrapper();
      });
    }
  });

  // ----------
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

  // ----------
  // Открываем окно с предложением отправить контактные данные
  var pageBody = document.querySelector("body");
  var contactForm = pageBody.querySelector(".contacts-form");
  var closeButton = pageBody.querySelector(".contacts-form__close");

  pageBody.addEventListener("click", function (event) {
    var target = event.target;

    var contactFormClose = function () {
      contactForm.classList.remove("contacts-form--show");
      document.removeEventListener("keydown", onContactFormEscPress);
    };

    var onContactFormEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        contactFormClose();
      }
    };

    if (target.classList.contains("contacts__button")
      || target.classList.contains("slider__button")
      || target.classList.contains("advantages__button")) {
      contactForm.classList.add("contacts-form--show");
      document.addEventListener("keydown", onContactFormEscPress);

      closeButton.addEventListener("click", contactFormClose);
    }
  });

  // ----------
  // После нажатия на "Узнать стоимость" страница переносит вверх , открывается выпадающий список выбора устройства
  var advantagesLink = document.querySelector(".advantages__link ");
  var devicesList = document.querySelector(".device-form__list");
  var deviceLabel = document.querySelector(".device-form__label");

  advantagesLink.addEventListener("click", function () {
    devicesList.classList.add("device-form__list--show");
    deviceLabel.classList.add("device-form__label--active");
  });
}());
