let result = document.getElementById("res")

function check_if_valid()
{
    if((result.innerHTML.length == 0) || (result.innerHTML.endsWith("+") || result.innerHTML.endsWith("-") || result.innerHTML.endsWith("/") || result.innerHTML.endsWith("*"))){
        return false
    }
    return true
}

function zero() {
    if(result.innerHTML == "Error")
        result.innerHTML = ""
    result.innerHTML += "0"
}
function one() {
    if(result.innerHTML == "Error")
        result.innerHTML = ""
    result.innerHTML += "1"
}
function Summation()
{
    if(check_if_valid()){
        result.innerHTML += "+"
    }
}
function Subtraction()
{
    if(check_if_valid()){
        result.innerHTML += "-"
    }
}
function Multiply()
{
    if(check_if_valid()){
        result.innerHTML += "*"
    }
}
function Divide()
{
    if(check_if_valid()){
        result.innerHTML += "/"
    }
}
function Clear() {
    result.innerHTML = "";
}

function Equal()
{
    //finding which operation is to be used
    var tokens = result.innerHTML.split(new RegExp('([-+*/])', 'g'));
    //preforming the correct operation
    if(tokens[1]===('+')) {
        result.innerHTML = (parseInt(tokens[0],2) + parseInt(tokens[2],2)).toString(2)
    }
    else if(tokens[1]===('-')) {
        result.innerHTML = (parseInt(tokens[0],2) - parseInt(tokens[2],2)).toString(2)
    }
    else if(tokens[1]==="*") {
        result.innerHTML = (parseInt(tokens[0],2) * parseInt(tokens[2],2)).toString(2)
    }
    else if(tokens[1]==="/") {
        result.innerHTML = (parseInt(tokens[0],2) / parseInt(tokens[2],2)).toString(2)
    }
    else {
        result.innerHTML = "Error"
    }
    
    
}

