// Hi good person :3

function closePages(page){
    document.getElementById("titleHome").style.display = "none";
    document.getElementById("titlePages").style.display = "block";
    document.getElementById("navPages").style.display = "block";
    document.getElementById("selyourfig").style.margin= "0 0 0.5rem 0";
    const pages = ["pageHome","pageSquare","pageCircle","pageTriangle","pageRectangle"];
    for (let i=0; i<pages.length;i++){
        if (pages[i] == page){
           
        }else{
            document.getElementById(pages[i]).style.display = "none";
        }
    }
}

function verifyValues(base,height){
    
    if (base==0 || height==0){
        return false;

    }else{
        return true;
    }
}

/* Square */
function showPageSquare(page){
    document.getElementById(page).style.display = "block";
    closePages(page);
}

function computeAreaSquare(side){
    return side ** 2;
}

function computePerimeterSquare(side){
    return side * 4;
}

function showAreaSquare(){
    const side = document.getElementById("inputSquare");
    const value = side.value;
    const areaSquare = computeAreaSquare(value);
    const answer = document.getElementById("answerSquare");
    answer.innerText = "Square Area is "+areaSquare+" [cm^2]";
}

function showPerimeterSquare(){
    const side = document.getElementById("inputSquare");
    const value = side.value;
    const perimeterSquare = computePerimeterSquare(value);
    const answer = document.getElementById("answerSquare");
    answer.innerText = "Square Perimeter is "+perimeterSquare+" [cm]";
}

// Circle
function showPageCircle(page){
    document.getElementById(page).style.display = "block";
    closePages(page);
}

function computeAreaCircle(ratio){
    const pi = Math.PI;
    return pi*(ratio**2);
}

function computePerimeterCircle(ratio){
    const pi = Math.PI;
    return 2*pi*ratio
}

function showAreaCircle() {
    const ratio = document.getElementById("inputCircle");
    const value = ratio.value;
    const areaCircle = computeAreaCircle(value);
    const areaC = areaCircle.toFixed(2);
    const answer = document.getElementById("answerCircle");
    answer.innerText = "Circle's Area is "+areaC+" [cm^2]";
}

function showPerimeterCircle(){
    const ratio = document.getElementById("inputCircle");
    const value = ratio.value;
    const perimeterCircle = computePerimeterCircle(value);
    const perimeterC = perimeterCircle.toFixed(2);
    const answer = document.getElementById("answerCircle");
    answer.innerText = "Circle Perimeter is = "+perimeterC+" [cm]";
}


/* Rectangle */
function showPageRectangle(page){
    document.getElementById(page).style.display = "block";
    closePages(page);
}
function computeAreaRectangle(side1,side2){
    return side1*side2;
}

function computePerimeterRectangle(side1,side2){
    return 2*(side1+side2);
}

function showAreaRectangle() {
    const side1 = document.getElementById("inputRectangle1");
    const side2 = document.getElementById("inputRectangle2");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);
    const areaRectangle = computeAreaRectangle(value1,value2);
    const answer = document.getElementById("answerRectangle");
    answer.innerText = "Rectangle Area is "+areaRectangle+" [cm^2]";
}

function showPerimeterRectangle(){
    const side1 = document.getElementById("inputRectangle1");
    const side2 = document.getElementById("inputRectangle2");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);

    verifySides = verifyValues(value1,value2);

    if (verifySides == true){
        const perimeterRectangle = computePerimeterRectangle(value1,value2);
        const answer = document.getElementById("answerRectangle");
        answer.innerText = "Rectangle Perimeter is "+perimeterRectangle+" [cm]";
    }else{
        const answer = document.getElementById("answerRectangle");
        answer.innerText = "Sorry, first you must a introduce the sides.";
    }
    
}
/* Triangle */
function showPageTriangle(page){
    document.getElementById(page).style.display = "block";
    closePages(page);
}
function computeAreaTriangle(side1,side2){
    return (0.5)*side1*side2;
}

function computePerimeterTriangle(side1,side2){
    return side1+2*side2;
}

function showAreaTriangle() {
    const side1 = document.getElementById("inputTriangle1");
    const side2 = document.getElementById("inputTriangle2");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);
    const areaTriangle = computeAreaTriangle(value1,value2);
    const answer = document.getElementById("answerTriangle");
    answer.innerText = "Triangle Area is "+areaTriangle+" [cm^2]";
}

function showPerimeterTriangle(){
    const side1 = document.getElementById("inputTriangle1");
    const side2 = document.getElementById("inputTriangle2");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);

    verifySides = verifyValues(value1,value2);

    if (verifySides == true){
        var sideTriangle = Math.sqrt((value1/2)**2 + value2**2);
        const perimeterTriangle = computePerimeterTriangle(value1,sideTriangle);
        const perimeterT = perimeterTriangle.toFixed(2);
        const answer = document.getElementById("answerTriangle");
        answer.innerText = "Rectangle Perimeter is "+perimeterT+" [cm]";
    }else{
        const answer = document.getElementById("answerTriangle");
        answer.innerText = "Sorry, first you must a introduce the sides.";
    }
    
}
