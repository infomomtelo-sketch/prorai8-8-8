function calc(){

const price = Number(document.getElementById("price").value)
const rent = Number(document.getElementById("rent").value)
const expenses = Number(document.getElementById("expenses").value)

const cashflow = rent - expenses
const roi = (cashflow * 12 / price) * 100

document.getElementById("result").innerText =
"Monthly Cashflow: $" + cashflow + " | ROI: " + roi.toFixed(2) + "%"
}
