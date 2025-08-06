import './App.css'
import ProductCard from './components/ProductCard';

const productList = [
  {
      "id": "animal_001",
      "timestamp": "2025-01-16T10:30:00.000Z",
      "animal_type": "Cow",
      "age": 2,
      "weight": 450,
      "price": 1200,
      "animal_name": "Bessie",
      "animal_gender": "Female"
  },
  {
      "id": "animal_003",
      "timestamp": "2025-01-16T12:00:00.000Z",
      "animal_type": "Chicken",
      "age": 1,
      "weight": 4.2,
      "price": 25,
      "animal_name": "Henrietta",
      "animal_gender": "Female"
  },
  {
      "id": "animal_004",
      "timestamp": "2025-01-16T13:30:00.000Z",
      "animal_type": "Sheep",
      "age": 2,
      "weight": 65.8,
      "price": 400,
      "animal_name": "Woolly",
      "animal_gender": "Female"
  },
  {
      "id": "animal_005",
      "timestamp": "2025-01-16T14:15:00.000Z",
      "animal_type": "Goat",
      "age": 1,
      "weight": 45.3,
      "price": 350,
      "animal_name": "Billy",
      "animal_gender": "Male"
  },
  {
      "id": "animal_006",
      "timestamp": "2025-01-16T15:00:00.000Z",
      "animal_type": "Horse",
      "age": 4,
      "weight": 520,
      "price": 2500,
      "animal_name": "Thunder",
      "animal_gender": "Male"
  },
  {
      "id": "animal_007",
      "timestamp": "2025-01-16T15:45:00.000Z",
      "animal_type": "Duck",
      "age": 1,
      "weight": 2.8,
      "price": 35,
      "animal_name": "Quackers",
      "animal_gender": "Male"
  },
  {
      "id": "animal_008",
      "timestamp": "2025-01-16T16:30:00.000Z",
      "animal_type": "Turkey",
      "age": 1,
      "weight": 12.5,
      "price": 85,
      "animal_name": "Gobbles",
      "animal_gender": "Female"
  }
]

// Image
// ${{name}}: (M/F) ${{animal_type}}
// Age ${{age}} | Weight ${{age}}
// Price

function ProductList(){
    return (
        <div>
            {productList.map((product) => (
                <ProductCard product={product}/>
            )
            )}
        </div>
    )
    
}
function App() {
  return (
    <>
      <div className='flex justify-center'>
          <h1 className='text-3xl text-blue-600'>My App</h1>
      </div>
      <div className='flex justify-center'>
          <ProductList/>
      </div>
    </>
    
  )
}

export default App
