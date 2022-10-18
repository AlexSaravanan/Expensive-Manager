const Income_El = document.getElementById("income");
const Source_In = document.getElementById("income_source");
const btn_in = document.getElementById("btn_in");
const table = document.getElementById("table");
const table_in = document.getElementById("table_in");
const In_alert = document.getElementById("in_alert");
const Ex_alert = document.getElementById("ex_alert");
const totalInput = document.getElementById("totalin");
const totalExpens = document.getElementById("totalex");
const Diff = document.getElementById("diff");

let totalIn = 0;
let totalEx = 0;

btn_in.addEventListener("click", function (e) {
  e.preventDefault();
  const lang = document.querySelector('input[name="fav_language"]:checked');
  if (lang.value == "Income") {
    if (Income_El.value && Source_In.value) {
      let row = table_in.insertRow(1);
      let Insor = row.insertCell(0);
      Insor.innerHTML = Source_In.value;
      let In_source = row.insertCell(1);
      In_source.innerHTML = Income_El.value;
      let remove = row.insertCell(2);
      remove.innerHTML = `<button class='close'><span class="material-symbols-outlined"> cancel </span> </button>`;
      totalIn += Number(In_source.innerHTML);
      totalInput.innerHTML = `${totalIn}`;
      In_alert.innerHTML = "";
      Income_El.value = "";
      Source_In.value = "";
      remove.addEventListener("click", function (e) {
        let result = confirm("Are you sure to delete?");
        if (result) {
          row.remove();
          totalIn -= Number(In_source.innerHTML);
          totalInput.innerHTML = `${totalIn}`;
          to = totalIn - totalEx;
          if (totalIn > totalEx) {
            Diff.innerHTML = `Save : ${to}`;
            Diff.style.color = "black";
          }else if(to == 0){
            Diff.innerHTML = ''
          } else {
            Diff.innerHTML = `loss : ${to}`;
            Diff.style.color = "Red";
          }
        }
      });
    } else {
      In_alert.innerHTML = "*Please fill the value";
    }
    to = totalIn - totalEx;
    if (totalIn > totalEx) {
      Diff.innerHTML = `Save : ${to}`;
      Diff.style.color = "black";
    } else {
      Diff.innerHTML = `loss : ${to}`;
      Diff.style.color = "Red";
    }
  } else {
    if (Income_El.value && Source_In.value) {
      let row = table.insertRow(1);
      let Insor = row.insertCell(0);
      Insor.innerHTML = Source_In.value;
      let In_source = row.insertCell(1);
      In_source.innerHTML = Income_El.value;
      let remove = row.insertCell(2);
      remove.innerHTML = `<button class='close'><span class="material-symbols-outlined"> cancel </span> </button>`;
      totalEx += Number(In_source.innerHTML);
      totalExpens.innerHTML = `${totalEx}`;
      In_alert.innerHTML = "";
      Income_El.value = "";
      Source_In.value = "";
      row.addEventListener("click", function (e) {
        let result = confirm("Are you sure to delete?");
        if (result) {
          row.remove();
          totalEx -= Number(In_source.innerHTML);
          totalExpens.innerHTML = `${totalEx}`;
          to = totalIn - totalEx;
          if (totalIn > totalEx) {
            Diff.innerHTML = `Save : ${to}`;
            Diff.style.color = "black";
          }else if(to == 0){
            Diff.innerHTML = ''
          } else {
            Diff.innerHTML = `loss : ${to}`;
            Diff.style.color = "Red";
          }
        }
      });
    } else {
      In_alert.innerHTML = "*Please fill the value";
    }
    to = totalIn - totalEx;
    if (totalIn > totalEx) {
      Diff.innerHTML = `Save : ${to}`;
      Diff.style.color = "black";
    } else {
      Diff.innerHTML = `loss : ${to}`;
      Diff.style.color = "Red";
    }
  }
});
