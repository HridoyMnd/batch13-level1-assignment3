
const otp = "ph-10985"

function validOtp(otp) {
    if(typeof otp === "string"){
        if(otp.startsWith("ph-") && otp.length === 8){
            return true
        }
        else{
            return false
        }
    }
    else{
        return "Invalid"
    }
}

// output here
const result2 = validOtp(otp);
console.log(result2);