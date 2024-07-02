const countersE1 = document.querySelectorAll
(".counter");


countersE1.forEach(countersE1=>{
    countersE1.innerText = "0";
        incrementCounter()
    function incrementCounter(){
        let currentNum = +countersE1.innerText
        const dataCeil = countersE1.getAttribute
        ("data-ceil");
        const increment = dataCeil / 15
        currentNum = Math.ceil(currentNum + increment)
        
        if(currentNum < dataCeil){
            countersE1.innerText = currentNum
            setTimeout
            (incrementCounter, 50)
        }else{
            countersE1.innerText = dataCeil
        }
    }
})