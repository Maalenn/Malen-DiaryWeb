document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("diary-form");
    const entriesContainer = document.getElementById("entries-container");
    const formPopup = document.getElementById("form-popup");
    const openFormButton = document.getElementById("open-form-button");
    const cancelButton = document.getElementById("cancel-button");
    let entries = [];
  
    openFormButton.addEventListener("click", () => {
      formPopup.classList.add("show");
      // Make what is behind form non-scrollable
      document.querySelector("html").classList.remove("overflow-y-hidden");
      // Make what is behind form blur
      document.querySelector(".background-blur").classList.remove("bg-blur");
      //Change z-index of side bar
      document.querySelector(".side-bar").style.zIndex = "1";
    });
  
    cancelButton.addEventListener("click", () => {
      formPopup.classList.remove("show");
      form.reset();
      form.dataset.mode = "";
      form.dataset.index = "";
      // Allow scrolling
      document.querySelector("html").classList.add("overflow-y-hidden");
      // Remove blur from background
      document.querySelector(".background-blur").classList.add("bg-blur");
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;
      const date = document.getElementById("date").value;
  
      if (title && content && date) {
        const entry = { title, content, date };
  
        if (form.dataset.mode === "edit") {
          const index = parseInt(form.dataset.index);
          entries[index] = entry;
          form.dataset.mode = "";
          form.dataset.index = "";
        } else {
          entries.push(entry);
        }
  
        saveEntries();
        displayEntries();
        form.reset();
        formPopup.classList.remove("show");
        // Allow scrolling
        document.querySelector("html").classList.add("overflow-y-hidden");
        // Remove blur from background
        document.querySelector(".background-blur").classList.add("bg-blur");
      } else {
        alert("Please fill in all fields.");
      }
    });
  
    const saveEntries = () => {
      localStorage.setItem("diary-entries", JSON.stringify(entries));
    };
  
    const loadEntries = () => {
      const storedEntries = localStorage.getItem("diary-entries");
      entries = storedEntries ? JSON.parse(storedEntries) : [];
    };
  
    const displayEntries = () => {
      entriesContainer.innerHTML = "";
  
      entries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        entryDiv.innerHTML = `
            <section class="entry-to-container"> 
                <div> Date: ${entry.date} </div>
                <hr>
                <section class="btn-edit-delete-container">
                    <button onclick="editEntry(${index})">
                        <span class="material-symbols-outlined edit-btn">edit</span></button>
                    <button onclick="deleteEntry(${index})">
                        <span class="material-symbols-outlined delete-btn">delete</span>
                    </button> 
                </section>
                 <div>
                <p>${entry.content}</p> 
            </div>
            </section>
            <div class="entry-title">
               <hr> 
                <h3>${entry.title}</h3>
            </div>
          `;
        entriesContainer.appendChild(entryDiv);
      });
    };
  
    window.editEntry = (index) => {
      const entry = entries[index];
      document.getElementById("title").value = entry.title;
      document.getElementById("content").value = entry.content;
      document.getElementById("date").value = entry.date;
      formPopup.classList.add("show");
      form.dataset.mode = "edit";
      form.dataset.index = index;
      // Make what is behind form non-scrollable
      document.querySelector("html").classList.add("overflow-y-hidden");
      // Make what is behind form blur
      document.querySelector(".background-blur").classList.add("bg-blur");
    };
  
    window.deleteEntry = (index) => {
      entries.splice(index, 1);
      saveEntries();
      displayEntries();
    };
  
    // Initial load from localStorage
    loadEntries();
    displayEntries();
  });
  