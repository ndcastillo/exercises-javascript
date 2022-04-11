function verifyCupon(){
    const cupons = ["cupon1","cupon2","cupon2"];
    const discountCupon =[10,15,17]
    const wordCupon = document.getElementById("word-cupon");
    const wordC = wordCupon.value;

    for (let i=0; i<cupons.length;i++){
        switch (wordC){
            case 'cupon1':
                return discountCupon[i];
                break;

            case 'cupon2':
                return discountCupon[i];
                break;
                
            case 'cupon3':
                return discountCupon[i];
                break;
            default:
                return 0
                break;
        }
    }
}

function verifyPercentage(discount){
    discount = discount.value;
    if (discount>100){
        return ["Discount Value exceeds 100%",false]
    }
    else if (discount == 0){
        return ["Null Value, insert to a discount value.",false]
    }
    else{
        return ["Verify Value", true]
    }
}

function showDivCupon(){
    const checkCupon = document.getElementById("yes-cupon");
    const spanWordCupon = document.getElementById("span-word-cupon");
    const divWordCupon = document.getElementById("div-word-cupon");
    if (checkCupon.checked == true){
        divWordCupon.style.display = "flex";
        spanWordCupon.style.display = "block";

    }else{
        divWordCupon.style.display = "none";
        spanWordCupon.style.display = "none";
    }
}

function discountCalculate(priceProduct,discount){
    const productPrice = document.getElementById(priceProduct);

    // discountPercentage
    const discountPercentage = document.getElementById(discount);
    const verifyP = verifyPercentage(discountPercentage);
    let cuponDiscount = 0;
    if (verifyP[1]==true){

        // Cupon Verify
        const checkCupon = document.getElementById("yes-cupon");
        if (checkCupon.checked == true){
            cuponDiscount = verifyCupon();
        }else{
            cuponDiscount = 0;
        }

        // Compute Total Price
        const total = productPrice.value - (discountPercentage.value/100)*productPrice.value - (cuponDiscount/100)*productPrice.value;
        const answerDiv = document.getElementById("answer"); 
        answerDiv.innerText = " "+total.toFixed(2);
    }else{
        const answerDiv = document.getElementById("answer"); 
        answerDiv.innerText = verify[0];
    }
    
    
}