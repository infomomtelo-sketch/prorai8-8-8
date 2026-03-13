const properties = [
{
  id:1,
  address:"245 Maple St",
  city:"Fresno",
  price:385000,
  beds:3,
  baths:2,
  sqft:1650
},
{
  id:2,
  address:"320 Oak Ave",
  city:"Clovis",
  price:410000,
  beds:3,
  baths:2,
  sqft:1720
}
]

const container = document.getElementById("results")

properties.forEach(p=>{
  const card = document.createElement("div")

  card.innerHTML = `
  <h3>${p.address}</h3>
  <p>${p.city}</p>
  <p>$${p.price}</p>
  <p>${p.beds} bed ${p.baths} bath</p>
  <a href="property.html?id=${p.id}">Analyze Deal</a>
  `

  container.appendChild(card)
})
