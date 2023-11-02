let expression = document.getElementById("expression");
expression.addEventListener("keyup",calculateExpression);

function calculateExpression(e){
    if (!activeElement) {
        alert("Please select a cell to make changes");
        form.reset();
        return;
    }
    if(e.keyCode === 13){
        activeElement.innerText = eval(expression.value);
        expression.value = "";
    }
}