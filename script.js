var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liAll= document.querySelectorAll("li");
var deleteitem = document.getElementsByClassName("delete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var button2 = document.createElement("button");
	button2.appendChild(document.createTextNode("Delete"));
	li.appendChild(button2);
	input.value = "";
	for (var i = 0; i < liAll.length; i++) {
		li.addEventListener("click", toggleItems);
		button2.addEventListener("click", deleteItems);
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleItems() {
		return this.classList.toggle("done");
}

function deleteItems() {
		return this.parentNode.remove();
}

for (var i = 0; i < liAll.length; i++) {
	liAll[i].addEventListener("click", toggleItems);
	deleteitem[i].addEventListener("click", deleteItems);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

