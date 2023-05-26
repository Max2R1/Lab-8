(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        
        switch (firstLetter) {
            case "j":
                byeSpeaker.speak(names[i]);
                break;
            default:
                helloSpeaker.speak(names[i]);
        }
    }

    console.log("Names ending with 'a':");
    for (var i = 0; i < names.length; i++) {
        var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();
        switch (lastLetter) {
            case "a":
                console.log(names[i]);
                break;
        }
    }

    console.log("Names with sum of ASCII codes greater than 200:");
    for (var i = 0; i < names.length; i++) {
        var asciiSum = 0;
        for (var j = 0; j < names[i].length; j++) {
            asciiSum += names[i].charCodeAt(j);
        }
        if (asciiSum > 200) {
            console.log(names[i]);
        }
    }
})();