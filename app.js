let plusBtn = document.querySelector(".plus");
let inputText = document.querySelector(".adder");
let list = document.querySelector(".list");


  document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      addLine();
      plusBtn.classList.add('added'); // Add class to change button color
      setTimeout(() => { // Remove the class after 1 second to revert back to original color
          plusBtn.classList.remove('added');
      }, 200);
  }
});


plusBtn.addEventListener("click", addLine);

function addLine() {
  const box = document.createElement("div");
  box.classList.add("line");

  const textLine = document.createElement("li");
  textLine.classList.add("lineInput");
  textLine.innerText = inputText.value;
  box.appendChild(textLine);

  const check = document.createElement("button");
  check.classList.add("finish");
  check.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  box.appendChild(check);

  check.addEventListener("click", function () {
    textLine.style.textDecoration = "line-through";
    check.style.color = "green";
  });

  const trash = document.createElement("button");
  trash.classList.add("delete");
  trash.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  box.appendChild(trash);

  trash.addEventListener("click", function () {
    list.removeChild(box);
  });

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
  box.appendChild(edit);

  edit.addEventListener("click", function () {
    list.removeChild(box);
    inputText.value=textLine.innerText;
  inputText.focus()

  });
  if(inputText.value != ""){
list.appendChild(box);
  }
  
  inputText.value = "";
  inputText.focus()
}


