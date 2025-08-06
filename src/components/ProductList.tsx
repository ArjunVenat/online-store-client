import type Product from "../interfaces/Product"
import ProductCard from "./ProductCard"


export default function ProductList(props: {productList: Product[]}){
    return (
        <div className="grid grid-cols-3 gap-2 justify-center m-2">
            {props.productList.map((product, index) => (
                <ProductCard product={product} imageSource={`../src/images/${index%2 ? "cow.jpg" : "pig.jpg"}`}/>
            )
            )}
        </div>
    )
}