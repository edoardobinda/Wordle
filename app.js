//VAR DECLARATION

var array = ["STELO"];
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

    selected = arrayAllCapital[0];
    console.log(selected); // This is the SELECTED word that will be on the display
    arrayForSelected = selected.split("");
    
    

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
    arrayForChosen = chosenword.split("");
    let control = [];

    for (let i = 0; i < arrayForChosen.length; i++){

        var arrayletterTofindinChosen = [];
        var letterToFindInSelected = [...selected].filter(l => l === arrayForChosen[i]).length;
        var letterTofindinChosen = [...chosenword].filter(l => l === arrayForChosen[i]).length;


        if (letterTofindinChosen > 1){
            arrayletterTofindinChosen.push(letterTofindinChosen);
            control.push(arrayForChosen[i]);
        }
        

        // SE LE LETTERE ALLA POSIZIONE "i" SONO IDENTICHE ==== V E R D E !!!
        if (arrayForChosen[i] == arrayForSelected[i]){
            greenarray.push(arrayForChosen[i]);
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "correctLetter");
        }

        //SE LA LETTERA ALLA POSIZIONE "i" NON C'E' DENTRO ALLA PAROLA SELECTED ==== ROSSO!
        else if (arrayForSelected.includes(arrayForChosen[i]) == false){
            redarray.push(arrayForChosen[i]);
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");
        }

        //POSSIBILITA' DI LETTERE GIALLE
        else {
            if ((letterTofindinChosen > letterToFindInSelected) && (control.length == 1)){
                yellowarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");        
            }
            else if ((letterTofindinChosen > letterToFindInSelected) && (control.length > 1)){
                redarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");
            }
            else if ((letterTofindinChosen == letterToFindInSelected) && (arrayForChosen[i] != arrayForSelected[i])){
                yellowarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");
            }
            else {
                yellowarray.push(arrayForChosen[i]);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "maybeLetter");
            }
        }
    }/*LOOP ENDS*/
} /*FUNCTION ENDS*/
