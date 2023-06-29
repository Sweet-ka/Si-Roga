const panels = document.querySelectorAll(".panel");

const addDark = function (el) {
  el.classList.add("dark");
};

const remDark = function (el) {
  el.classList.remove("dark");
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      panels.forEach((item) => {
        addDark(item);
      });
    } else {
      panels.forEach((item) => {
        remDark(item);
      });
    }
  });
});

observer.observe(document.querySelector("#bbk"));

const observerFooter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      panels.forEach((item) => {
        addDark(item);
      });
    } else {
      panels.forEach((item) => {
        remDark(item);
      });
    }
  });
});

observerFooter.observe(document.querySelector("#footer"));
