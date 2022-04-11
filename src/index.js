import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタン
  const button1 = document.createElement("button");
  button1.innerText = "完了";
  button1.addEventListener("click", () => {
    deleteIncompleteList(button1.parentNode);
    const addTarget = button1.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    //完了のリストに移す
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  }); //戻すボタン

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    document.getElementById("complete-list").removeChild(backButton.parentNode);
    const backTarget = backButton.parentNode;
    const btext = backTarget.firstElementChild.innerText;
    backTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = btext;
    backTarget.appendChild(li);

    //未完了のリストに戻す
    backTarget.appendChild(button1);
    backTarget.appendChild(button2);
    document.getElementById("incomplete-list").appendChild(backTarget);
  });

  //削除ボタン
  const button2 = document.createElement("button");
  button2.innerText = "削除";
  button2.addEventListener("click", () => {
    deleteIncompleteList(button2.parentNode);
  });

  //未完了のリストに新規追加
  div.appendChild(li);
  div.appendChild(button1);
  div.appendChild(button2);
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
