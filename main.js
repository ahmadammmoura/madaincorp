var allData;
fetchData(
  `https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true`
);
const customers = document.querySelector(".costumers");

const wrapper = document.querySelector(".category");

wrapper.addEventListener("click", (event) => {
  filter(event.target.id);
});

function fetchData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      renderAllData(allData);
    })
    .catch((err) => {
      console.log(err);
    });
}

function renderAllData(data) {
  const html = data
    .map((item) => {
      return `<div class="person">
            <div class="img">
                <p>${item.fname[0]}${item.lname[0]}</p>
            </div>
            <p>${item.fname} ${item.lname}</p>

            <p class="categoryText">${item.category}</p>
        </div>`;
    })
    .join("");

  customers.innerHTML += html;
}

function filter(category) {
  const filterd = allData
    .filter((item) => item.category === category)
    .map((item) => {
      return `<div class="person">
          <div class="img">
              <p>${item.fname[0]}${item.lname[0]}</p>
          </div>
          <p>${item.fname} ${item.lname}</p>

          <p class="categoryText">${item.category}</p>
      </div>`;
    })
    .join("");

  customers.innerHTML = filterd;
}
