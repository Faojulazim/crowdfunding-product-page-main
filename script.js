const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const hiddenDiv = document.querySelector("#hiddenDiv");
const bookmark = document.querySelector("#bookmark");
const closeModalIcon = document.querySelector("#closeModal");
const rewardSection = document.querySelector("#rewardSection");
const backandreward = document.querySelectorAll("[data-projectandrewardBtn]");
const border = document.querySelectorAll("[data-border]");
const pledge = document.querySelectorAll("[data-pledge]");
const inputDiv = document.querySelectorAll("[data-inputDiv]");
const thankyouSection = document.querySelector("#thankyouSection");
const continueBtn = document.querySelectorAll("[data-continue]");
const pledgeInput = document.querySelectorAll("[data-pledgeInput]");

//toggle section for navbar menu

hamburger.addEventListener("click", (e) => {
  hamburger.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  hiddenDiv.classList.remove("translate-y-[-200%]");
});

//toggle section for navbar menu

closeIcon.addEventListener("click", (e) => {
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  hiddenDiv.classList.add("translate-y-[-200%]");
});

//bookmark button toggle

bookmark.addEventListener("click", (e) => {
  document
    .querySelector("#bookmarkImg")
    .classList.toggle("sm:translate-x-[115px]");
  bookmark.querySelector("p").classList.toggle("sm:translate-x-[-53px]");
  bookmark.querySelector("p").classList.toggle("text-ModerateCyan");
  document.querySelector("#circle").classList.toggle("fill-DarkCyan");
  document.querySelector("#path").classList.toggle("fill-[#ffffff]");
});

backandreward.forEach((element) => {
  element.addEventListener("click", (e) => {
    rewardSection.classList.remove("hidden");
    document.body.classList.add("overflow-y-hidden");
  });
});

//on body click change the code to default

document.body.addEventListener("click", (e) => {
  const closest = e.target.closest(
    "[data-projectandrewardBtn],#noClick,#closeModal,#thankyouSection"
  );
  if (!closest) {
    rewardSection.classList.add("hidden");
    document.body.classList.remove("overflow-y-hidden");
  }
});

//code for elements clicked on the modal and also on condition take the changes to default

inputDiv.forEach((element) => {
  document.body.addEventListener("click", (e) => {
    const closest = e.target.closest(
      "[data-projectandrewardBtn],#noClick,#closeModal,#thankyouSection"
    );
    if (!closest) {
      rewardSection.classList.add("hidden");
      if (element.querySelector("[data-border]")) {
        element
          .querySelector("input")
          .classList.remove(
            "ring-1",
            "ring-gray-300",
            "bg-ModerateCyan",
            "border-white",
            "border-[6px]"
          );
        element.classList.remove("border-[hsl(176_50%_47%)]");
        element.querySelector("[data-border]").classList.add("hidden");
        element.querySelector("[data-pledge]").classList.add("hidden");
      } else {
        element.classList.remove("border-[hsl(176_50%_47%)]");
        element
          .querySelector("input")
          .classList.remove(
            "ring-1",
            "ring-gray-300",
            "bg-ModerateCyan",
            "border-white",
            "border-[6px]"
          );
      }
    }
  });
  closeModalIcon.addEventListener("click", (e) => {
    document.body.classList.remove("overflow-y-hidden");
    rewardSection.classList.add("hidden");
    if (element.querySelector("[data-border]")) {
      element
        .querySelector("input")
        .classList.remove(
          "ring-1",
          "ring-gray-300",
          "bg-ModerateCyan",
          "border-white",
          "border-[6px]"
        );
      element.classList.remove("border-[hsl(176_50%_47%)]");
      element.querySelector("[data-border]").classList.add("hidden");
      element.querySelector("[data-pledge]").classList.add("hidden");
    } else {
      element.classList.remove("border-[hsl(176_50%_47%)]");
      element
        .querySelector("input")
        .classList.remove(
          "ring-1",
          "ring-gray-300",
          "bg-ModerateCyan",
          "border-white",
          "border-[6px]"
        );
    }
  });
  element.addEventListener("click", (e) => {
    if (element.querySelector("[data-border]")) {
      element
        .querySelector("input")
        .classList.add(
          "ring-1",
          "ring-gray-300",
          "bg-ModerateCyan",
          "border-white",
          "border-[6px]"
        );
      document.body.classList.remove("overflow-y-hidden");
      element.classList.add("border-[hsl(176_50%_47%)]");
      element.querySelector("[data-border]").classList.remove("hidden");
      element.querySelector("[data-pledge]").classList.remove("hidden");
      document.querySelector("#gotitButton").addEventListener("click", (e) => {
        thankyouSection.classList.add("hidden");
        element
          .querySelector("input")
          .classList.remove(
            "ring-1",
            "ring-gray-300",
            "bg-ModerateCyan",
            "border-white",
            "border-[6px]"
          );
        element.classList.remove("border-[hsl(176_50%_47%)]");
        element.querySelector("[data-border]").classList.add("hidden");
        element.querySelector("[data-pledge]").classList.add("hidden");
      });
    } else {
      document.body.classList.remove("overflow-y-hidden");
      element.classList.add("border-[hsl(176_50%_47%)]");
      element
        .querySelector("input")
        .classList.add(
          "ring-1",
          "ring-gray-300",
          "bg-ModerateCyan",
          "border-white",
          "border-[6px]"
        );
      thankyouSection.classList.remove("hidden");
      rewardSection.classList.add("hidden");
      document.querySelector("#gotitButton").addEventListener("click", (e) => {
        thankyouSection.classList.add("hidden");
        element
          .querySelector("input")
          .classList.remove(
            "ring-1",
            "ring-gray-300",
            "bg-ModerateCyan",
            "border-white",
            "border-[6px]"
          );
        element.classList.remove("border-[hsl(176_50%_47%)]");
      });
    }
    inputDiv.forEach((anotherElement) => {
      if (element !== anotherElement) {
        if (anotherElement.querySelector("[data-border]")) {
          anotherElement
            .querySelector("input")
            .classList.remove(
              "ring-1",
              "ring-gray-300",
              "bg-ModerateCyan",
              "border-white",
              "border-[6px]"
            );
          anotherElement.classList.remove("border-[hsl(176_50%_47%)]");
          anotherElement.querySelector("[data-border]").classList.add("hidden");
          anotherElement.querySelector("[data-pledge]").classList.add("hidden");
        } else {
          anotherElement
            .querySelector("input")
            .classList.remove(
              "ring-1",
              "ring-gray-300",
              "bg-ModerateCyan",
              "border-white",
              "border-[6px]"
            );
          anotherElement.classList.remove("border-[hsl(176_50%_47%)]");
        }
      }
    });
  });
});

//on DOMContentLoaded adding the transition

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#anime").classList.add("w-[75%]");
  document.querySelector("#anime").classList.remove("w-[0]");
});

//code for the continue button

continueBtn.forEach((continueButton) => {
  continueButton.addEventListener("click", (e) => {
    const inputValue = parseInt(
      continueButton.parentElement.querySelector("input").value
    );
    const pledgeAmount = parseInt(
      continueButton.parentElement.parentElement.parentElement.querySelector(
        "[data-pledgeAmount]"
      ).innerText
    );
    if (isNaN(inputValue) || inputValue < pledgeAmount) {
      alert("You must enter the minimum amount of pledge or more");
    } else {
      thankyouSection.classList.remove("hidden");
      continueButton.parentElement.querySelector("input").value = "";
      rewardSection.classList.add("hidden");
    }
  });
});
