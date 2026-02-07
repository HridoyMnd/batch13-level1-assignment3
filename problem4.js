const input = ["ha", "ha", "ha", "na"]

function gonoVote(array) {
    if (Array.isArray(array)) {
        if (array.length > 0) {
            let haCount = 0;
            let naCount = 0;

            for (const arr of array) {
                if (typeof arr === "string") {
                    if (arr === "ha" || arr === "na") {
                        if (arr === "ha") {
                            haCount++;
                        }
                        else {
                            naCount++;
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

            if (haCount > naCount) {
                return true
            }
            else if (haCount === naCount) {
                return "equal"
            }
            else {
                return false
            }
        }
        else {
            return "Invalid"
        }
    }
    else {
        return "Invalid";
    }
}

// output here
const result4 = gonoVote(input);
console.log(result4);