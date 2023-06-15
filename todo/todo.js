const getedata = document.getElementById("intext");
const submitbtn = document.getElementById("enterbutton");

const outerdiv = document.getElementById("outer");

submitbtn.addEventListener("click", () => {
  const data = getedata.value;
  console.log(data);

  const firstdiv = document.createElement("div");
  firstdiv.className = "task";

  const seconddiv = document.createElement("div");
  seconddiv.className = "listdiv";

  firstdiv.appendChild(seconddiv);

  const listedata = document.createElement("input");
  listedata.className = "text-input";
  listedata.type = "text";
  listedata.value = data;
  listedata.setAttribute("readonly", "readonly");

  seconddiv.appendChild(listedata);

  const buttondiv = document.createElement("div");
  buttondiv.className = "btnfun";

  const editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  editbtn.className = "edit";

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.className = "delete";

  buttondiv.appendChild(editbtn);
  buttondiv.appendChild(deletebtn);

  firstdiv.appendChild(buttondiv);

  outerdiv.appendChild(firstdiv);

  getedata.value = "";

  deletebtn.addEventListener("click", () => {
    outerdiv.removeChild(firstdiv);
  });

  editbtn.addEventListener("click", () => {
    if (editbtn.innerText.toLowerCase() == "edit") {
      editbtn.innerText = "save";
      listedata.removeAttribute("readonly");
      listedata.focus();
    } else {
      editbtn.innerText = "edit";
      listedata.setAttribute("readonly", "readonly");
    }
  });
});
