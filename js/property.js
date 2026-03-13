const properties = [
  {
    id: 1,
    address: "245 Maple St",
    city: "Fresno",
    price: 385000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    year: 1998,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    address: "320 Oak Ave",
    city: "Clovis",
    price: 410000,
    beds: 3,
    baths: 2,
    sqft: 1720,
    year: 2001,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
  }
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const property = properties.find(p => p.id === id);

if (property) {
  document.getElementById("propertyImage").src = property.image;

  document.getElementById("property").innerHTML = `
    <h2>${property.address}</h2>
    <p class="muted">${property.city}</p>
    <p class="price">$${property.price.toLocaleString()}</p>
    <p>${property.beds} bed • ${property.baths} bath • ${property.sqft.toLocaleString()} sqft</p>
    <p class="muted">Built ${property.year}</p>
  `;

  document.getElementById("purchase").value = property.price;

  const estimatedRent = Math.round(property.price * 0.006);
  document.getElementById("rent").value = estimatedRent;

  const estimatedExpenses = Math.round(estimatedRent * 0.22);
  document.getElementById("expenses").value = estimatedExpenses;

  calc();
}
