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

const bbk = document.querySelector("#bbk");
if (bbk) observer.observe(bbk);

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

const footer = document.querySelector("#footer");
if (footer) observerFooter.observe(footer);