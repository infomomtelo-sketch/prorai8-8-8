const properties = [
  {
    id: 1,
    address: "245 Maple St",
    city: "Fresno",
    price: 385000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    year: 1998
  },
  {
    id: 2,
    address: "320 Oak Ave",
    city: "Clovis",
    price: 410000,
    beds: 3,
    baths: 2,
    sqft: 1720,
    year: 2001
  }
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const property = properties.find(p => p.id === id);

if (property) {
  document.getElementById("property").innerHTML = `
    <h3>${property.address}</h3>
    <p>${property.city}</p>
    <p>Price: $${property.price.toLocaleString()}</p>
    <p>${property.beds} bed • ${property.baths} bath • ${property.sqft} sqft</p>
    <p>Built ${property.year}</p>
  `;

  document.getElementById("purchase").value = property.price;

  const estimatedRent = Math.round(property.price * 0.006);
  document.getElementById("rent").value = estimatedRent;

  const estimatedExpenses = Math.round(estimatedRent * 0.22);
  document.getElementById("expenses").value = estimatedExpenses;

  calc();
}
