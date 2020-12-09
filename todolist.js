document.querySelector("#Input").addEventListener("submit", response)

let newInput = document.getElementById("new input");

let listOfItems = document.getElementById("listofitems");

function response(event){
    event.preventDefault();
    
    let input= newInput.value;
    let string = []
    string.push(input);
    const list = string.map(thelist => 
        `<ol id="demo">${thelist} <button onclick="responseToClick()">x</button><button id="check" onclick="responseToClickTwo()">check</button>
        </ol>`);
        listOfItems.innerHTML=list.join("");
}

function responseToClick() {
	///alert('hello');
	let myobj = document.getElementById("demo");
	myobj.remove();
}

function responseToClickTwo(style) {
	let myobj = document.getElementById("demo").style.textDecoration = "line-through";
}