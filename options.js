const cellNamePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontfamily");
const form = document.querySelector("form");

let activeElement = null;

const state = {};

const defaultProperties = {
  fontFamily: "sans",
  fontSize: 16,
  textColor: "#000000",
  bgColor: "#ffffff",
  bold: false,
  italic: false,
  strikethrough: false,
//   underline: false,
  textAlign: "left",
  value: "",
};

function onCellFocus(event) {
  const elementId = event.target.id;
  cellNamePlaceholder.innerText = elementId;
  activeElement = event.target;
  if (state[elementId]) {
    resetOptions(state[elementId]);
  } else {
    resetOptions(defaultProperties);
  }
}

function resetOptions(optionsState) {
    form.fontFamily.value = optionsState.fontFamily;
    form.fontSize.value = optionsState.fontSize;
    form.textAlign.value = optionsState.textAlign;
    form.bold.checked = optionsState.bold
    form.italic.checked = optionsState.italic;
    form.strikethrough.checked = optionsState.strikethrough;
    // form.underline.checked = optionsState.underline;
    form.textColor.value = optionsState.textColor;
    form.bgColor.value = optionsState.bgColor;
}

function onFormChange() {
  if (!activeElement) {
    alert("Please select a cell to make changes");
    form.reset();
    return;
  }

  let currentState = {
    fontFamily: form.fontFamily.value,
    fontSize: form.fontSize.value,
    textColor: form.textColor.value,
    bgColor: form.bgColor.value,
    bold: form.bold.checked,
    italic: form.italic.checked,
    strikethrough: form.strikethrough.checked,
    // underline: form.underline.checked,
    textAlign: form.textAlign.value,
  };

//   console.log(currentState);
  makeChangesOnCurrentCell(currentState);

  state[activeElement.id] = {...currentState, value: activeElement.innerText};
}

function makeChangesOnCurrentCell(styleObject){
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    activeElement.style.fontFamily = styleObject.fontFamily;
    activeElement.style.color = styleObject.textColor;
    activeElement.style.backgroundColor = styleObject.bgColor;
    activeElement.style.textAlign = styleObject.textAlign;

    activeElement.style.fontWeight = styleObject.bold ? "bold" : "normal";
    activeElement.style.fontStyle = styleObject.italic ? "italic" : "normal";
    activeElement.style.textDecoration = styleObject.strikethrough ? "line-through" : "none";
    // activeElement.style.textDecoration = styleObject.underline ? "underline" : "none";
    console.log(activeElement.style.textDecoration);
}
