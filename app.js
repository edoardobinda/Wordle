//VAR DECLARATION

var array = ["Nonio"];
var arrayAllCapital = [];
var selected = "";
var arrayCapShufNotRepeated = [];

let arrayForSelected = [];
let arrayForChosen = [];

let greenarray = [];
let redarray = [];
let yellowarray = [];


//ONLOAD FUNCTION START
window.onload = function (){
    // Section: CAPITALIZE every word of the Array
    for (let i = 0; i < array.length; i++) {
        arrayAllCapital.push(array[i].toLocaleUpperCase());
    }

    selected = arrayAllCapital[0]; // This is the SELECTED word that will be on the display
    console.log(selected);
    arrayForSelected = selected.split("");
    console.log("this is arrayforselected" , arrayForSelected);


} //ONLOAD FUNCTION ENDS HERE /////////////////////////////////////////////////////////////////

var div1 = document.getElementById("divdisplay1");
var div2 = document.getElementById("divdisplay2");
var div3 = document.getElementById("divdisplay3");
var div4 = document.getElementById("divdisplay4");
var div5 = document.getElementById("divdisplay5");
let chosenword = "";


for (let i = 1; i < 27; i++) {
    let buttoninput = document.getElementById("divinput"+i);
    buttoninput.onclick = function (){
        if (div1.innerText == ""){
            div1.innerText = this.innerText;
        }
        else if (div2.innerText == ""){
            div2.innerText = this.innerText;
        }
        else if (div3.innerText == ""){
            div3.innerText = this.innerText;
        }
        else if (div4.innerText == ""){
            div4.innerText = this.innerText;
        }
        else if (div5.innerText == ""){
            div5.innerText = this.innerText;
        }
        chosenword = div1.innerText + div2.innerText +div3.innerText +div4.innerText +div5.innerText;
    }
}// END OF FOR LOOP

//SUBMIT BUTTON
function submit(){
    console.log("chosenword=" , chosenword);
    arrayForChosen = chosenword.split("");
    console.log("this is arrayforchosen" , arrayForChosen);

    for (let i = 0; i < arrayForChosen.length; i ++){

        if (arrayForChosen[i] == arrayForSelected[i]){
            greenarray.push(arrayForChosen[i]);
            console.log("greenarray", greenarray);
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "correctLetter");
        }
        else {
            if (arrayForSelected.includes(arrayForChosen[i]) == false){
                redarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");
            }
            else {
                yellowarray.push(arrayForChosen[i]);
                console.log("yellowarray", yellowarray);
                for (let i = 0; i < greenarray.length; i++){
                    for (let j = 0; j < yellowarray.length; j++){
                        var letterTofind = [...selected].filter(l => l === yellowarray[i]).length;
                        var letterTofindinChosen = [...chosenword].filter(l => l === yellowarray[i]).length;
                        console.log(letterTofind);
                        console.log(letterTofindinChosen);
                        if ((greenarray[i] === yellowarray[j]) && (letterTofind > 1) && (letterTofindinChosen > letterTofind)) {
                            redarray.push(yellowarray[i]);
                        }
                    }
                }
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");
            }
            console.log(redarray); //PROVA
        }
    }/*LOOP ENDS*/
} /*FUNCTION ENDS*/

