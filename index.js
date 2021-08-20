import { m, createElement, patch } from "million";

// Initialize app
const app = createElement(m("div", { id: "app" }, ["Hello World"]));
document.body.appendChild(app);
// Patch content
patch(app, m("div", { id: "app" }, ["Goodbye World"]));
