let body = document.querySelector('body');
body.setAttribute('style', 'color: purple');

let newButton = document.createElement('button');
body.appendChild(newButton);
newButton.innerHTML = "ADD";

let i = 0

function addButtonClicked(){
    // console.log('hit');
    // alert("Good job clicking the button!");

    let newHeader = document.createElement('h2');
    newHeader.innerHTML = "Big Blue Balloon";
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);

    console.log(newHeader)
}


newButton.addEventListener('click', addButtonClicked);

let newButton2 = document.createElement('button');
body.appendChild(newButton2);
newButton2.innerHTML = "REMOVE";

function removeButtonClicked(){
    // console.log('hit');
    // alert("Good job clicking the button!");

    let newHeader = document.createElement('h2');
    newHeader.innerHTML = "Big Blue Balloon";
    body.appendChild(newHeader);
}


newButton.addEventListener('click', removeButtonClicked);

// console.log(body);