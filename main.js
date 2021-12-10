const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".slider .progress");

let priceGap = 1000;
priceInput.forEach(input=>{
    input.addEventListener("input",e =>{
        //getting two input value and parsing them to number
        let minval = parseInt(priceInput[0].value),
        maxval = parseInt(priceInput[1].value);

        if((maxval-minval>=priceGap)&&maxval<=10000)
        {
            if(e.target.className === "input-min")
            //if active input is min input
            {
                rangeInput[0].value = minval;
                progress.style.left = (minval/rangeInput[0].max)*100+"%";
            }
            else{
                rangeInput[1].value = maxval;
                progress.style.right = 100-(maxval/rangeInput[1].max)*100+"%";
            }
        }
    });
});
rangeInput.forEach(input=>{
    input.addEventListener("input",e =>{
        //getting two ranges value and parsing them to number
        let minval = parseInt(rangeInput[0].value),
        maxval = parseInt(rangeInput[1].value);

        if(maxval-minval<priceGap)
        {
            if(e.target.className === "range-min")
            {
                rangeInput[0].value = maxval-priceGap;
            }
            else{
                rangeInput[1].value = minval+priceGap;
            }
        }
        else{
            priceInput[0].value = minval;
            priceInput[1].value = maxval;
            progress.style.left = (minval/rangeInput[0].max)*100+"%";
            progress.style.right = 100-(maxval/rangeInput[1].max)*100+"%";
        }
    });
});