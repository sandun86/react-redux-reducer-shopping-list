import ProductItem from "./Product"
import { Product as ProductInterface } from "../store/productSlice"

type ProductListProps = {
  products: ProductInterface[]
  getEditProduct: (editProduct: ProductInterface) => void
  setEditProduct: (editProduct: ProductInterface) => void
  editProduct: ProductInterface | null
}

const ProductList = ({
  products,
  editProduct,
  getEditProduct,
  setEditProduct,
}: ProductListProps) => {
  return (
    <div>
      {products        
        .map(product => (
          <ProductItem
            key={product.id}
            product={product}
            editProduct={editProduct}
            getEditProduct={getEditProduct}
            setEditProduct={setEditProduct}
          />
        ))}
    </div>
  )
}

export default ProductList;
