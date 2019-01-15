"use strict";

(function () {
  var ESC_KEYCODE = 27;

  var repairWrapper = document.querySelector(".page-header__repair");
  var banner = document.querySelector(".page-header__banner");

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
      banner.classList.add("page-header__banner--show");
      banner.addEventListener("click", function () {
        target.classList.remove("page-header__repair-button--active");
        showWindow.classList.remove("page-header__repair-window--show");
        banner.classList.remove("page-header__banner--show");
      });

      // Закрытия окна по ESC
      var closeRepairWrapper = function () {
        showWindow.classList.remove("page-header__repair-window--show");
        repairButtonOne.classList.remove("page-header__repair-button--active");
        repairButtonTwo.classList.remove("page-header__repair-button--active");
        banner.classList.remove("page-header__banner--show");
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

  // ---------- Открываем окно с предложением отправить контактные данные
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
      || target.classList.contains("advantages__button")
      || target.classList.contains("footer-services__button")
      || target.classList.contains("total-cost__button")) {
      contactForm.classList.add("contacts-form--show");
      document.addEventListener("keydown", onContactFormEscPress);

      closeButton.addEventListener("click", contactFormClose);
    } else if (target.classList.contains("contacts-form--show")) {
      contactForm.classList.remove("contacts-form--show");
    }

  });


  // ---------- Валидация формы
  var userName = document.getElementById("user-name");
  var userPhone = document.getElementById("phone");

  var formValidation = function (element) {
    if (element.validity.valueMissing) {
      element.classList.add("input--invalid");
    }
  };

  userName.addEventListener("invalid", function () {
    formValidation(userName);
  });

  userPhone.addEventListener("invalid", function () {
    formValidation(userPhone);
  });

  // ---------- Навигационная кнопка
  var topButton = document.querySelector(".to-top-link");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 400) {
      topButton.classList.remove("to-top-link--hidden");
    } else {
      topButton.classList.add("to-top-link--hidden");
    }
  });


  // ---------- Открытие меню в мобильной версии по клику
  var navList = document.querySelector(".main-nav__list");
  var openNavButtton = document.querySelector(".main-nav__button--open");
  var closeNavButton = document.querySelector(".main-nav__button--close");

  openNavButtton.addEventListener("click", function () {
    navList.classList.remove("main-nav__list--hidden");
    openNavButtton.classList.add("main-nav__button--hidden");
    closeNavButton.classList.add("main-nav__button--show");
  });

  closeNavButton.addEventListener("click", function () {
    navList.classList.add("main-nav__list--hidden");
    openNavButtton.classList.remove("main-nav__button--hidden");
    closeNavButton.classList.remove("main-nav__button--show");
  });

  // ---------- Открытие контактов в планшетной и мобильной версии по клику
  var contactsOpenButton = document.querySelector(".page-header__contacts-button");
  var contactsBlock = document.querySelector(".page-header__contacts");

  contactsOpenButton.addEventListener("click", function () {
    contactsBlock.classList.toggle("page-header__contacts--show");
  });

  // ---------- Акции и Новости
  var actionLink = document.getElementById("action-link");
  var actionList = document.getElementById("action-list");

  var newsLink = document.getElementById("news-link");
  var newsList = document.getElementById("news-list");

  var allActionButton = document.getElementById("all-action");
  var allNewsButton = document.getElementById("all-news");

  actionLink.addEventListener("click", function () {
    actionLink.classList.add("info__link--active");
    actionList.classList.remove("info__list--close");

    newsLink.classList.remove("info__link--active");
    newsList.classList.add("info__list--close");

    allActionButton.classList.remove("info__action-link--close");
    allNewsButton.classList.add("info__action-link--close");
  });

  newsLink.addEventListener("click", function () {
    newsLink.classList.add("info__link--active");
    newsList.classList.remove("info__list--close");

    actionLink.classList.remove("info__link--active");
    actionList.classList.add("info__list--close");

    allActionButton.classList.add("info__action-link--close");
    allNewsButton.classList.remove("info__action-link--close");
  });
}());
