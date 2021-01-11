// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  localStorage.getItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-red") {
    setTheme("theme-blue");
  } else {
    setTheme("theme-red");
  }
}

// Immediately invoked function to set the theme on initial load
(() => {
  if (localStorage.getItem("theme") === "theme-red") {
    setTheme("theme-red");
  } else {
    setTheme("theme-blue");
  }
})();

