import productList from "../pages/api/productList.json"

function DessertList() {
  return (
    <ul>
      {productList.desserts.map((dessert) => (
        <li key={dessert.id}>
          <img src={dessert.image} />
          <h1>{dessert.name}</h1>
          <p>{dessert.price}</p>
        </li>
      ))}
    </ul>
  )
}

export default DessertList
