const nouns = ["The turkey", "My mom", "My dad", "Dog", "-"];
const verbs = ["Sat on", "Ate", "Danced with", "Doesn't like", "Kissed with", "-"];
const adjectives = ["A funny","A spooky", "A goofy", "A barking", "A fat", "-"];
const objects = ["Goat","Monkey","Fish","Frog","Giraffe","-"];
const place = ["On the moon", "On the chair", "In my spaghetti", "On the grass", "On my shoes", "-"];
const synth = window.speechSynthesis;

//create the function to change each part of the sentence
var nounIndex = 0;
function changeNoun() {
    var element = document.getElementById("noun");
    element.textContent = nouns[nounIndex];
    nounIndex = (nounIndex + 1) % nouns.length;

    return nouns[nounIndex-1];
}

var verbIndex = 0;
function changeVerb() {
    var element = document.getElementById("verb");
    element.textContent = verbs[verbIndex];
    verbIndex = (verbIndex + 1) % verbs.length;

    return verbs[verbIndex-1];
}

var adjIndex = 0;
function changeAdj() {
    var element = document.getElementById("adjective");
    element.textContent = adjectives[adjIndex];
    adjIndex = (adjIndex + 1) % adjectives.length;

    return adjectives[adjIndex-1];
}
var ObjIndex = 0;
function changeObj() {
    var element = document.getElementById("object");
    element.textContent = objects[ObjIndex];
    ObjIndex = (ObjIndex + 1) % objects.length;

    return objects[ObjIndex-1];
}
var PlaceIndex = 0;
function changePlace() {
    var element = document.getElementById("place");
    element.textContent = place[PlaceIndex];
    PlaceIndex = (PlaceIndex + 1) % place.length;

    return place[PlaceIndex-1];
}

function repeat(){
    let message = nouns[nounIndex-1]+verbs[verbIndex-1]+adjectives[adjIndex-1]+objects[ObjIndex-1]+place[PlaceIndex-1];
    return message;
}
//create a surprise message 
function surprise(){
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    for(let i = 0; i<randomNumber; i++){
        changeNoun();
        changeVerb();
        changeAdj();
        changeObj();
        changePlace();
    }
    return repeat();
}
//function for the text to speech
function speak (message) {
    var msg = new SpeechSynthesisUtterance(message)
    var voices = window.speechSynthesis.getVoices()
    msg.voice = voices[2]
    window.speechSynthesis.speak(msg)
}

//function that receives from html
function sayThing(number){
    switch(number){
        case 1:
            speak(changeNoun());
            break;
        case 2:
            speak(changeVerb());
            break;
        case 3:
            speak(changeAdj());
            break;
        case 4:
            speak(changeObj());
            break;
        case 5:
            speak(changePlace());
            break;
        case 6:
            speak(surprise());
            break;
        case 7:
            speak(repeat());
            break;
    }
} 
