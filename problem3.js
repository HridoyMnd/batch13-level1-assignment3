const omr = { right: 80, wrong: 25, skip: 0 } 

function finalScore(omr) {
    if (typeof omr === "object") {
        let totalMark = 0;
        for (const ppt in omr) {
            const pptValue = omr[ppt];
            if (typeof pptValue === "number") {
                totalMark += pptValue;
            }
            else {
                return "Invalid"
            }
        }

        if (totalMark === 100) {
            const rightAns = omr.right;
            const wrongAns = omr.wrong;
            const totalScore = rightAns - (wrongAns * 0.5);
            return Math.round(totalScore);
        }
        else {
            return "Invalid"
        }
    }
    else {
        return "Invalid"
    }
}


// outout here
const result3 = finalScore(omr);
console.log(result3);