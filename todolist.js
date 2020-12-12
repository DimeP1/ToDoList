let string = []
document.querySelector("#Input").addEventListener("submit", response)

let newInput = document.getElementById("new input");

let listOfItems = document.getElementById("listofitems");

function response(event){
    event.preventDefault();
    
    let input= newInput.value;
   
    string.push(input);
    const list = string.map(thelist => 
        `<ol id="demo">${thelist} <button class= "delete" onclick="responseToClick()">x</button><button class="check" onclick="responseToClickTwo()">check</button>
        </ol>`);
        listOfItems.innerHTML=list.join("");
}

//function responseToClick() {
//	///alert('hello');
//	let myobj = document.getElementById("demo");
//	myobj.remove();
//}

//function responseToClickTwo(style) {
//	let myobj = document.getElementById("demo").style.textDecoration = "line-through";
//}
function responseToClick() {
	///alert('hello');
	///let myobj = document.getElementById("demo");
	//myobj.remove();
if(event.target.classList.contains('delete')){
	event.target.parentElement.remove();
}
}

///function responseToClickTwo(style) {
///	let myobj = document.getElementById("demo")
	
///}
function responseToClickTwo() {
	///alert('hello');
	///let myobj = document.getElementById("demo");
	//myobj.remove();
if(event.target.classList.contains('check')){
	event.target.parentElement.style.textDecoration = "line-through";
}
}