function insertValues (num) {
    const input =  document.getElementById("input-value"). value
    document.getElementById("input-value"). value= input + num
    }

    function calculate () {
        const input =  document.getElementById("input-value"). value  
        document.getElementById("input-value"). value=eval(input)
    }

    function erasevalues (){
        const input =  document.getElementById("input-value"). value = "" 

    }
function intervalue (){

calculate()
const input =  document.getElementById("input-value"). value  
document.getElementById("input-value"). value = input * -1
}