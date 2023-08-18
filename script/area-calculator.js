function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

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
    
    if(isNaN(width) || isNaN(length)){
        alert('please insert a number')
        return
    }
    area = width * length;

    setElementInnerText('rectangle-area', area)

    addToCalculationEntry('Rectangle', area)
}
 
//Parallelogram calculate area
function calculateParallelogramArea() {
   const base = getInputValue('parallelogram-base');
   const height = getInputValue('parallelogram-height');
   
   if(isNaN(base) || isNaN(height)){
    alert('please insert a number')
    return
   }
   area = base * height;
   setElementInnerText('parallelogram-area', area);

   //add to calculation entry
   addToCalculationEntry('parallelogram', area)
}

//ellipse calculation area

function calculateEllipseArea(){
    const large = getInputValue('ellipse-large')
    const short = getInputValue('ellipse-short');
    
    if(isNaN(large) || isNaN(short)){
        alert('please insert a number')
        return
    }
    area = 3.14 * large * short
    const areaTwoDecimal = area.toFixed(2);

    setElementInnerText('ellipse-area', areaTwoDecimal);
    
    //add to calculation entry
    addToCalculationEntry('Ellipse', areaTwoDecimal)
}

//pentagon calculation area
function calculatePentagonArea(){
    const side = getInputValue('pentagon-side');

    if(isNaN(side)){
        alert('please insert a number');
        return
    }
    area = 1.72 * side * side;
    setElementInnerText('pentagon-area', area)
    
    //add to calculation entry
    addToCalculationEntry('Pentagon', area)
}

//Rhombus calculate area
function calculateRhombusArea() {
    const short = getInputValue('diagonal-short');
    const large = getInputValue('diagonal-large');
    if(isNaN(short) || isNaN(large)){
        alert('please insert a number')
        return
    }
    area = 0.5 * short * large
    setElementInnerText('rhombus-area', area)
     
     //add to calculation entry
    addToCalculationEntry('Rhombus', area)
}


//add to calculation entry
function addToCalculationEntry(areaType,area){
    console.log(areaType +" "+ area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
   

    const p = document.createElement('p')
    p.classList.add('my-4');
    p.innerHTML = `${count +1}. ${areaType} ${area} cm<sup>2</sup> <button class='btn btn-sm btn-success'>convert</button>`;
    calculationEntry.appendChild(p);
}