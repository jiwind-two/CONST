import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;

  const button1 = document.createElement("button");
  button1.innerText = "完了";
  button1.addEventListener("click", () => {
    deleteIncompleteList(button1.parentNode);
    const addTarget = button1.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backButon = document.createElement("button");
    backButon.innerText = "戻す";
    addTarget.appendChild(li);
    addTarget.appendChild(backButon);
    console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
  });
  const button2 = document.createElement("button");
  button2.innerText = "削除";
  button2.addEventListener("click", () => {
    deleteIncompleteList(button2.parentNode);
  });
  //    const addTarget = button1.parentNode;

  //    const text = addTarget.firstElementChild.innerText;

  //   li.innerText = text;
  //    addTarget.textContent = null;
  //   console.log(button1, button2);
  div.appendChild(li);
  div.appendChild(button1);
  div.appendChild(button2);
  document.getElementById("incomplete-list").appendChild(div);

  /*
    const button3 = document.createElement("button");
    button3.innerText = "戻す";
    button3.addEventListener("click",()=>{
    const addTarget=button3.parentNode;
    const text=addTarget.firstElementChild.innerText;
    console.log(text);
    addTarget.appendChild(li);
    addTarget.appendChild(button3);
    console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
    });
    */
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
