// Start Navigation Bar with dynamic component

// Import data from data file 
import { FooterData } from "../data/footer-data.js";

// Declare variable 'dataSources' to set 'nav-bar-menu-data' and can use it in html file
const dataSources = {
  "footer-data": FooterData,
};

// Start the component that map list menu in navigation bar
const FooterContainer = (footerContents) => {
  return `
        <footer class="footer">
            <section class="footer-container container-max-width">
                <div class="footer-logo"> 
                    <div class="logo">
                        <img src="/khunmalen-diary-web/src/image/logo.png" alt="" />
                    </div>
                    <h1>Khun Malen</h1>
                </div>
                <ul class="footer-menu">
                ${footerContents
                  .map(
                    (items) => `
                     <li class="list-footer"><a href="#" class="list-item">
                        <img src=${items} alt="">
                     </a></li>
                `
                  )
                  .join("")}  
                </ul>
            </section>
        </footer>
    `;
};

// Create one class to working with my component
class Footer extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = FooterContainer(data);
  }
}

// For the 'navigation-bar-component' is component's name
customElements.define("footer-component", Footer);


// End the component that map list menu in navigation bar