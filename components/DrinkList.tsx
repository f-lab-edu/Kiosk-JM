import productList from "../pages/api/productList.json"

function DrinkList() {
  return (
    <ul>
      {productList.drinks.map((drink) => (
        <li key={drink.id}>
          <img src={drink.image} />
          <h1>{drink.name}</h1>
          <p>{drink.price}</p>
        </li>
      ))}
    </ul>
  )
}

export default DrinkList
