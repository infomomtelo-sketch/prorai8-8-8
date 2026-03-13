function calculateMonthlyMortgage(principal, annualRate = 7, years = 30) {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  if (!principal || principal <= 0) return 0;

  if (monthlyRate === 0) {
    return principal / numberOfPayments;
  }

  const mortgage =
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return mortgage;
}

function calc() {
  const price = Number(document.getElementById("purchase").value) || 0;
  const rent = Number(document.getElementById("rent").value) || 0;
  const expenses = Number(document.getElementById("expenses").value) || 0;

  const loanAmount = price * 0.8; // 20% down
  const monthlyMortgage = calculateMonthlyMortgage(loanAmount, 7, 30);

  const totalMonthlyCosts = expenses + monthlyMortgage;
  const cashflow = rent - totalMonthlyCosts;
  const roi = price > 0 ? ((cashflow * 12) / price) * 100 : 0;

  document.getElementById("mortgageResult").innerText =
    "Monthly Mortgage: $" + monthlyMortgage.toFixed(2);

  document.getElementById("result").innerText =
    "Monthly Cashflow: $" + cashflow.toFixed(2) +
    " | ROI: " + roi.toFixed(2) + "%";
}
