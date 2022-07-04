let userinputEL = document.getElementById("user-input");
let searchedItemsEl = document.getElementById("searchitems");
let spinnerEl = document.getElementById("spinner");

function creatAndAppend(searchitem) {
  let { title, link, description } = searchitem;

  let searchContain = document.createElement("div");
  searchContain.classList.add("searchedCon");

  let titleEl = document.createElement("a");
  titleEl.textContent = title;
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.classList.add("title");
  searchContain.appendChild(titleEl);

  let brEL = document.createElement("br");
  searchContain.appendChild(brEL);

  let urlEl = document.createElement("a");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.classList.add("url");
  urlEl.textContent = link;
  searchContain.appendChild(urlEl);

  let brEL1 = document.createElement("br");
  searchContain.appendChild(brEL1);

  let linkdescription = document.createElement("p");
  linkdescription.textContent = description;
  linkdescription.classList.add("descri");
  searchContain.appendChild(linkdescription);

  searchedItemsEl.appendChild(searchContain);
}

function display(searchresults) {
  spinnerEl.classList.add("d-none");
  for (let searchitem of searchresults) {
    creatAndAppend(searchitem);
  }
  // creatAndAppend(searchresults[0]);
}

function searchWikipedia(event) {
  if (event.key === "Enter") {
    searchedItemsEl.textContent = "";
    spinnerEl.classList.remove("d-none");
    let userinput = userinputEL.value;

    let option = {
      method: "GET",
    };
    let url = "https://apis.ccbp.in/wiki-search?search=" + userinput;
    fetch(url, option)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let { search_results } = data;
        display(search_results);
      });
  }
}
userinputEL.addEventListener("keydown", searchWikipedia);
