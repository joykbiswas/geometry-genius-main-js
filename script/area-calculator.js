function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);
    
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

//reduce duplicate

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText)
    return value;
}

function setElementInnerText(fieldId,area){
    const element = document.getElementById(fieldId);
    element.innerText = area
}
// Rectangle calculate Area
function  calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    area = width * length;

    setElementInnerText('rectangle-area', area)
}
 
//Parallelogram calculate area
function calculateParallelogramArea() {
   const base = getInputValue('parallelogram-base');
   const height = getInputValue('parallelogram-height');

   area = base * height;
   setElementInnerText('parallelogram-area', area)
}

//ellipse calculation area

function calculateEllipseArea(){
    const large = getInputValue('ellipse-large')
    const short = getInputValue('ellipse-short');

    area = 3.14 * large * short

    setElementInnerText('ellipse-area', area);
}

//pentagon calculation area
function calculatePentagonArea(){
    const side = getInputValue('pentagon-side');
    area = 1.72 * side * side;
    setElementInnerText('pentagon-area', area)
}

//Rhombus calculate area
function calculateRhombusArea() {
    const short = getInputValue('diagonal-short');
    const large = getInputValue('diagonal-large');

    area = 0.5 * short * large
    setElementInnerText('rhombus-area', area)
}