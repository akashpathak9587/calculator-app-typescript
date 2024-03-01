import "./css/style.css";
import Template from "./templateModel/Template";
const AppInit = () => {
  const instance = Template.instance;
  instance.applyEvents();
};

document.addEventListener("DOMContentLoaded", AppInit);
