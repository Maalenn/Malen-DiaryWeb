// Start Side Bar with dynamic component

// Import data from data file
import { SideBarData } from "../data/side-bar-data.js";

// Declare variable 'dataSources' to set 'nav-bar-menu-data' and can use it in html file
const dataSources = {
  "side-bar-data": SideBarData,
};

// Start the component that map list menu in side bar
const SideBarContainer = (sideContents) => {
  return `
        <section class="side-bar-cantainer container-max-width">
          <aside class="side-bar">
            <button class="close-button" onclick="closeNavBar()">
              <span class="material-symbols-outlined">close</span>
            </button>
            <section class="profile-container">
              <div class="profile-image"></div>
              <h2 class="profile-name">Ma Len</h2>
            </section>
            <ul class="menu-side-bar">
            ${sideContents
              .map(
                (items) => `
              <li class="side-bar-list">
                <a href="">
                  <div>
                    <span class="material-symbols-outlined">${items.menuIcon}</span>
                    <div>${items.menuTitle}</div>
                  </div>
                </a>
              </li>
              `
              )
              .join("")}
            </ul>
          </aside>
        </section>
    `;
};

// Create one class to working with my component
class SideBarMenu extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = SideBarContainer(data);
  }
}

// For the 'side-bar-component' is component's name
customElements.define("side-bar-component", SideBarMenu);

// End the component that map list menu in side bar
