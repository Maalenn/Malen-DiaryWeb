// Create entry and form popup c
const FormPopupEntryContainer = () => {
    return `
        <section class="main-entry">
            <div id="entries-container"></div>
        </section>
        <section id="form-popup" class="main-form">
            <form id="diary-form">
                <section class="header1">
                    <nav class="navigation-bar container-max-width">
                        <div class="navigation-left">
                            <div class="logo">
                                <img src="/khunmalen-diary-web/src/image/logo.png" alt="Logo" />
                            </div>
                            <h3>Diary Website Application</h3>
                        </div>
                    </nav>
                </section>
                <section class="info-container container-max-width">
                    <input type="date" id="date" required />
                    <input type="text" id="title" placeholder="Untitled....." required />
                    <textarea id="content" placeholder="Write something here......"required></textarea>
                    <div class="btn-container-popup">
                        <button type="submit" id="submit-button">Create</button>
                        <button type="button" id="cancel-button">Cancel</button>
                    </div>
                </section>
            </form>
        </section>
      `;
  };
  
  class FormPopupEntry extends HTMLElement {
    connectedCallback() {
      this.innerHTML = FormPopupEntryContainer();
    }
  }
  
  customElements.define("formpopup-entry-component", FormPopupEntry);
  