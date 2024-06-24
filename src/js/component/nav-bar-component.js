import { NavBarMenuData } from "../data/nav-bar-data.js";
const dataSources = {
  "nav-bar-menu-data": NavBarMenuData,
};

const NavigationBarContainer = (menuContents) => {
  return `
        <header class="header">
            <nav class="navigation-bar container-max-width">
                <div class="menu-bar-icon">
                    <span class="material-symbols-outlined menu-bar"> menu </span>
                </div>
                    <h1>Diary Website Application</h1>
                <div class="logo-container">
                    <div class="logo">
                        <img src="./src/image/logo.png" alt="" />
                    </div>
                    <h3>Diary Website Application</h3>
                </div>
                <ul class="menu-top">
                ${menuContents
                  .map(
                    (items) => `
                     <li class="list-top"><a href="" class="list-item">${items}</a></li>
                `
                  )
                  .join("")}
                   
                </ul>
                <section class="navigation-left"> 
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

class NavigationBarMenu extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = NavigationBarContainer(data);
  }
}

customElements.define("navigation-bar-component", NavigationBarMenu);
