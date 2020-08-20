//Varaibles
    var mikeFacts = [" has been around the world twice, but never been to Atlantic City", 
    "'s wife's grandmother was a computer programmer", 
    " claims he was the first Young Men's Christian Association Jewish Indian Chief",
    "'s grandmother was married to an Oppenheimer (as in J. Robert Oppenheimer)",
    " can spin his tongue 360 degrees"];

    var woodsFacts = [" is colorblind", 
    " loves to play video games", 
    " is half-Guatemalan", 
    "'s favorite food is enchiladas", 
    " has visited 38 of the 50 states in the USA"];

    var chosenPerson = "";

    var chosenQuestion = "";

    var pickPerson = ["mike", "woods"];

    var rightGuesses = 0
    var wrongGuesses = 0

    var rnewquestion = true

//Listens for "Pick a New Fact" being clicked
document.getElementById("newFact").addEventListener("click", function() {
    
    //Allows only one question/answer at a time
    if(rnewquestion == true) { 
        rnewquestion = false
    
        //Chooses either "mike" or "woods"
        if(mikeFacts.length > 0 && woodsFacts.length > 0) {
            chosenPerson = pickPerson[Math.floor(Math.random() * pickPerson.length)]
        }

        //If there are still facts in mikeFacts Array, chosenPerson is Mr. Mike
        else if(mikeFacts.length > 0) {
            chosenPerson = "mike"
        }

        //If there are still facts in woodsFacts Array, chosenPerson is Mr. Woods
        else if(woodsFacts.length > 0) {
            chosenPerson = "woods"
        }

        //If no more facts are left, stops game
        else {
            alert("No more questions left, Game Over")
            document.getElementById("newFact").removeEventListener("click"); 
        }

        //If the chosen person is Mr. Mike
        if(chosenPerson == "mike") {

            //Chooses last question in mikeFacts Array
            chosenQuestion = mikeFacts.pop();

            //Listens for "Mr. Mike" being clicked
            document.getElementById("mike").addEventListener("click", correct);
            
            //Listens for "Mr. Woods" being clicked
            document.getElementById("woods").addEventListener("click", incorrect);
        }

        //If the chosen person is Mr. Woods
        else if(chosenPerson == "woods") {

            //Chooses last question in woodsFacts Array
            chosenQuestion = woodsFacts.pop();
            
            //Listens for "Mr. Woods" being clicked
            document.getElementById("woods").addEventListener("click", correct);

            //Listens for "Mr. Mike" being clicked
            document.getElementById("mike").addEventListener("click", incorrect);
        }

        //Displays question in the proper form
        document.getElementById("question").innerHTML = "Who" + chosenQuestion + "?"
    }
});

function correct() {

    alert("Correct!")    

    //Increases Right Guess Counter
    rightGuesses++
    document.getElementById("right-guesses").innerHTML = rightGuesses

    //Removes all event listeners
    document.getElementById("mike").removeEventListener("click", correct);
    document.getElementById("woods").removeEventListener("click", incorrect);
    document.getElementById("mike").removeEventListener("click", incorrect);
    document.getElementById("woods").removeEventListener("click", correct);

    //Allows for a new question to be chosen
    rnewquestion = true
};

function incorrect() {

    console.log("incorrect")
    alert("Incorrect!")

    //Increases Wrong Guess Counter
    wrongGuesses++
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses

    //Removes all event listeners
    document.getElementById("mike").removeEventListener("click", correct);
    document.getElementById("woods").removeEventListener("click", incorrect);
    document.getElementById("mike").removeEventListener("click", incorrect);
    document.getElementById("woods").removeEventListener("click", correct);

    //Allows for a new question to be chosen
    rnewquestion = true
};