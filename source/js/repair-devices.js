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
}());
