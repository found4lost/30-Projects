function calculateLoan(){
    loanAmountValue = document.getElementById
    ("loan-amount").value

    interestRateValue = document.getElementById
    ("interest-rate").value

    MonthsTopPayValue = document.getElementById
    ("months-to-pay").value

    interest = (loanAmountValue * (interestRateValue*0.01)) / MonthsTopPayValue

    monthlyPayment = (loanAmountValue / MonthsTopPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML =`Monthly Payment: ${monthlyPayment}`
}