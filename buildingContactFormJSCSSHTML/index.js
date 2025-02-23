const formEl = document.getElementById("form");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const displayDiv = document.getElementById("displayDiv");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameData = nameInput.value.trim();
  const numberData = numberInput.value.trim();
  let dataArr = [];

  dataArr.push([nameData, numberData]);

  dataArr.map((data) => {
    const row = `
       <tr>
          <td>${data[0]}</td>
          <td>${data[1]}</td>
          <td><button class="del">Delete</button></td>
        </tr>
    `;
    displayDiv.innerHTML += row;
  });

  const delBtns = document.getElementsByClassName("del"); //return html collectios
  Array.from(delBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const row = e.target.parentElement.parentElement;
      row.remove();
    });
  });
});
