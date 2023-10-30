const cellNamePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontfamily");

let activeElement = null;

const state = {};

const defaultProperties = {
    fontFamily: 'sans',
    fontSize: 16,
    color: "#000",
    textAlign: "left", 
    backgroundColor: "#fff",
    isBold: false,
    isItalic: false,
    isUnderlined: false
}

function onCellFocus(event) {
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;
    if (state[elementId]) {
        resetOptions(state[elementId]);
    }
    else {
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionsState) {
    fontSizeInput.value = optionsState.fontSize;
    fontFamilyInput.value = optionsState.fontFamily;
}