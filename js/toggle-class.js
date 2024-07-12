export function toggleClass() {
  const { pathname } = window.location;

  const els = document.querySelectorAll("a");

  els.forEach((a) => a.classList.remove("selected"));

  document.querySelector(`a[href="${pathname}"]`).classList.add("selected");
}
