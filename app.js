
//VAR DECLARATION
var array = ["Cacca", "AMIco", "AmaCa", "BallO", "Burro", "gattO", "VIGNa", "zucca", "ulivo"];
var arrayAllCapital = [];
var selected = "";
var arrayCapShufNotRepeated = [];


//ONLOAD FUNCTION START
window.onload = function (){
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
    console.log("This is arrayAllCapital shuffled: " + arrayAllCapital);
    console.log("This is Selected: " + selected);

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

    //DOPO DEVI FARE VAR ES. VAR DIV1 = DIV1.INNERHTML (O .INNERTEXT)

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
    if (arrayAllCapital.indexOf(chosenword) == -1){
        alert("This word is empty or not in the dictionary")
    }
}

//CANCEL BUTTON
function cancel(){
    if (div5.innerText != ""){
        div5.innerText = "";
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


