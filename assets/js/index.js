if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

const languageButtons = document.querySelectorAll("[data-lang-button]");
const languagePanels = document.querySelectorAll("[data-lang-panel]");

function setLanguage(language) {
  languagePanels.forEach((panel) => {
    panel.hidden = panel.dataset.langPanel !== language;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langButton === language;
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language === "ko" ? "ko" : "en";
  window.localStorage.setItem("resume-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langButton));
});

setLanguage(window.localStorage.getItem("resume-language") || "en");
