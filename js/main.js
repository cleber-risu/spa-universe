import { Router } from "./router.js";
import { toggleClass } from "./toggle-class.js";

const router = new Router();

router.add("/", "pages/home.html");
router.add("/ouniverso", "pages/ouniverso.html");
router.add("/exploracao", "pages/exploracao.html");
router.add(404, "pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

const home = document.querySelector('a[href="/"]');
home.onclick = () => {
  route();
  toggleClass();
};

const universe = document.querySelector('a[href="/ouniverso"]');
universe.onclick = () => {
  route();
  toggleClass();
};

const exploration = document.querySelector('a[href="/exploracao"]');
exploration.onclick = () => {
  route();
  toggleClass();
};

toggleClass();
