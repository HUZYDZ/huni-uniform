(function () {
  const root = document.documentElement;
  const key = "huni-theme";
  const saved = localStorage.getItem(key);
  root.dataset.theme = saved === "dark" ? "dark" : "light";

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    if (!button) return;

    const updateButton = function () {
      const dark = root.dataset.theme === "dark";
      button.textContent = dark ? "☀" : "☾";
      button.setAttribute("aria-label", dark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối");
      button.setAttribute("title", dark ? "Chuyển sang sáng" : "Chuyển sang tối");
    };

    updateButton();
    button.addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem(key, root.dataset.theme);
      updateButton();
    });
  });
})();
