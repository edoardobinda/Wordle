// First Part starts here

//VAR DECLARATION
var array = ["Cacca", "AMIco", "AmaCa", "BallO", "Burro", "gattO", "VIGNa", "zucca", "ulivo", "Bolla"];
var arrayAllCapital = [];
var selected = "";
var arrayCapShufNotRepeated = [];

let arrayForSelected = [];
let arrayForChosen = [];

let okLetters = [];
let wrongLetters = [];
let maybeLetters = [];




//ONLOAD FUNCTION START
window.onload = function (){

    // Preliminary instructions:
    // What this function should do:
    // This function, at the load of the page, should do the following:
    // CAPITALIZE every word of the Array
    // SHUFFLE words inside initial array
    // Make sure word DO NOT REPEAT TWICE
    // Choose a RANDOM word to put in the SECTIONDISPLAY (each letter to each DIV) from an Array
    // RANDOMIZE the letter of the chosen word
    // Check that SAME WORDS DO NOT REPEAT TWICE IN A ROW
    // "PUSH" each letter into a DIV
    // Create phrase in the description like "Choose the first letter"
    // Blinking cursor on first position (POS1)

    // Section: CAPITALIZE every word of the Array
    for (let i = 0; i < array.length; i++) {
        arrayAllCapital.push(array[i].toLocaleUpperCase());
    }

    // Section: SHUFFLE words inside initial array
    function shuffle(array) {
        let currenti = array.length;
        let randomi;

        // While there remain elements to shuffle...
        while (currenti != 0) {

        // Pick a remaining element...
        randomi = Math.floor(Math.random() * currenti);
        currenti--;

        // And swap it with the current element.
        [array[currenti], array[randomi]] = [
            array[randomi], array[currenti]];
        }
        return array;
    }// Shuffle function ends here
    shuffle(arrayAllCapital);

    selected = arrayAllCapital[0]; // This is the chosen word that will be on the display
    /*console.log("This is arrayAllCapital shuffled: " + arrayAllCapital);

    console.log("'This is the string typeof'" , typeof selected);*/
    arrayForSelected = selected.split("");
    console.log("This is Selected: " + selected);
    console.log("this is arrayforselected" , arrayForSelected);

    /*
    // Section: Make sure first word of the array DO NOT REPEAT TWICE
    for (let i = 0; i < arrayAllCapital.length; i++) {
        //var randomnumber = (Math.floor(Math.random() * ((arrayAllCapital.length - 1) - 0 + 1)) + 0);
        var selected = arrayAllCapital.splice(randomnumber, 1); //Splice modifies each loop the original array, cutting 1 ele at the time
        var selected = arrayAllCapital[0];
        if (i == 0){
            if (previousSelected != selected[0]){
                arrayCapShufNotRepeated.push(selected[0]);
            }
            else{
                i--
            }
        }
        else {
            arrayCapShufNotRepeated.push(selected[0]);
        }
    }
    var flatarray = arrayCapShufNotRepeated.flat();
    previousSelected = flatarray[0];
    // DO NOT REPEAT TWICE ENDS HERE
    */

    /*Section: "PUSH" each letter to the correct DIV in the display
    var div1 = document.getElementById("divdisplay1").inner;
    var div2 = document.getElementById("divdisplay2");
    var div3 = document.getElementById("divdisplay3");
    var div4 = document.getElementById("divdisplay4");
    var div5 = document.getElementById("divdisplay5");*/

    //DOPO DEVI FARE VAR ES. VAR div1 = div1.INNERHTML (O .INNERTEXT)

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
}// END OF FOR LOOP                 /*["Cacca", "AMIco", "AmaCa", "BallO", "Burro", "gattO", "VIGNa", "zucca", "ulivo"]*/


console.log(arrayAllCapital);
                                                                /*["B", "A", "L", "L", "O"]*/
//SUBMIT BUTTON                                                 /*["G", "A", "T", "T", "O"]*/
function submit(){

    if (arrayAllCapital.isOf(chosenword) == -1){
        alert("The word is not in the dictionary or there are blank spaces")
    }
    else{
        arrayForChosen = chosenword.split("");
        console.log("this is arrayforchosen" , arrayForChosen);

        for (let i = 0; i < arrayForChosen.length; i ++) {                      /*["U", "L", "I", "V", "O"]*/

            if (arrayForChosen[i] == arrayForSelected[i]) {                     /*["B", "O", "L", "L", "A"]*/
            console.log("lettera giusta al posto giusto");
            okLetters.push(arrayForChosen[i]);
            console.log("this is okLetter array", okLetters);
            document.getElementById("divdisplay"+(i+1)).setAttribute("class", "correctLetter");
            }
            else {
                if (arrayForSelected.includes(arrayForChosen[i]) == false){
                console.log("lettera non presente");
                wrongLetters.push(arrayForChosen[i]);
                console.log("this is wrongLetters array", wrongLetters);
                document.getElementById("divdisplay"+(i+1)).setAttribute("class", "wrongLetter");
                }
                else {
                console.log("lettera presente ma nel posto errato");
                maybeLetters.push(arrayForChosen[i]);
                console.log("this is maybeLetters array", maybeLetters);
                for (let i = 0; i < arrayForChosen.length; i++) {
                    //if (document.getElementById("divdisplay"+(i+1)) if there's more than one than just color the first result)
                    // for info look https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
                    // part of "Counting instances of values in an object"
                    // Probably Reduce + Splice : reduce tell you how many elements there are, splice we can modify the original array
                }
                    /*if (document.getElementById("divdisplay"+(i+1)).classList.contains("maybeLetter")){
                        document.getElementById("divdisplay"+(i+1)).classList.remove("maybeLetter");
                    }
                    else{
                    document.getElementById("divdisplay"+(i+1)).classList.add("maybeLetter");
                    }*/


                }
            }

        }/*LOOP ENDS*/
    }
} /*FUNCTION ENDS*/

//CANCEL BUTTON
function cancel(){
    if (div5
.innerText != ""){
        div5
.innerText = "";
    }
    else if (div4.innerText != ""){
        div4.innerText = "";
    }
    else if (div3.innerText != ""){
        div3.innerText = "";
    }
    else if (div2.innerText != ""){
        div2.innerText = "";
    }
    else if (div1.innerText != ""){
        div1.innerText = "";
    }
}
// First Part ends here


// Second part Starts here
// Preliminary Instructions:
// We must control the places of letters in "CHOSENWORD" against "Selected" ("Selected" is a typeof STRING and is already all capital lettes)

