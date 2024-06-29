// Start Navigation Bar with dynamic component

// Import data from data file 
import { NavBarMenuData } from "../data/nav-bar-data.js";

// Declare variable 'dataSources' to set 'nav-bar-menu-data' and can use it in html file
const dataSources = {
  "nav-bar-menu-data": NavBarMenuData,
};

// Start the component that map list menu in navigation bar
const NavigationBarContainer = (menuContents) => {
  return `
        <header class="header">
            <nav class="navigation-bar container-max-width">
                <button class="menu-bar-icon" onclick="openNavBar()">
                    <span class="material-symbols-outlined menu-bar"> menu </span>
                </button>
                    <h1>Diary Website Application</h1>
                <div class="navigation-left">
                    <div class="logo">
                        <img src="/khunmalen-diary-web/src/image/logo.png" alt="" />
                    </div>
                    <h3>Diary Website Application</h3>
                </div>
                <ul class="navigation-menu">
                ${menuContents
                  .map(
                    (items) => `
                     <li class="list-top"><a href="" class="list-item">${items}</a></li>
                `
                  )
                  .join("")}  
                </ul>
                <section class="navigation-right"> 
                    <div class="search-container">
                        <button class="search-btn">
                            <span class="material-symbols-outlined"> search </span>
                        </button>
                        <div class="search-title">Search...</div>
                    </div>
                    <span class="material-symbols-outlined">person</span>
                </section>
            </nav>
        </header>
    `;
};

// Create one class to working with my component
class NavigationBarMenu extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = NavigationBarContainer(data);
  }
}

// For the 'navigation-bar-component' is component's name
customElements.define("navigation-bar-component", NavigationBarMenu);


// End the component that map list menu in navigation bar