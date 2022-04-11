import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);
  const button1 = document.createElement("button");
  button1.innerText = "完了";
  button1.addEventListener("click", () => {
    alert("完了");
  });
  const button2 = document.createElement("button");
  button2.innerText = "削除";
  button2.addEventListener("click", () => {
    alert("削除");
    const deleteTarget = button2.parentNode;
    console.log(deleteTarget);
  });
  console.log(button1, button2);
  div.appendChild(li);
  div.appendChild(button1);
  div.appendChild(button2);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
