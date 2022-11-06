import { init } from "./attendees.js";
import { toggleModal } from "./attendees.js";

init();
const modal = document.querySelector("#app-modal");

document.addEventListener("keyup", event => {
    const key = event.key;
    if (key === "n" && !modal.classList.contains("show")) {
        toggleModal();
    }
    if (key === "Escape" && modal.classList.contains("show")) {
        toggleModal();
    }
});