const str = "I am a little honest person"

function analyzeText(str) {
    if (typeof str === "string") {
        const characters = str.split(" ").join("");
        const token = characters.length;
        if (token > 4) {
            const words = str.split(" ")
            let longWord = words[0];
            for (const word of words) {
                if (longWord.length < word.length) {
                    longWord = word;
                }
            }

            return {
                longwords: longWord, token: token
            }
        }
        else {
            return "Invalid"
        }
    }
    else {
        return "Invalid"
    }
}

// output here
const result5 = analyzeText(str);
console.log(result5);