import { useDispatch } from "react-redux"
import { Product } from "../store/productSlice"
import { deleteProduct } from "../store/productSlice"
import { Button, Col, FormControl, Row } from "react-bootstrap"

type ProductProps = {
  product: Product
  editProduct: Product | null
  getEditProduct: (editProduct: Product) => void
  setEditProduct: (editProduct: Product) => void
}

const ProductItem = ({
  product,
  editProduct,
  getEditProduct,
  setEditProduct,
}: ProductProps) => {
  const dispatch = useDispatch()

  const handleGetEditProductClick = () => getEditProduct(product)
  const handleDeleteProductClick = () => {
    dispatch(deleteProduct({ id: product.id }))
    if (product.id === editProduct?.id) {
      setEditProduct({ id: 0, name: "", amount: "" })
    }
  }

  return (
    <>
      <Row style={{ paddingBottom: "10px" }}>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={4}>
          <FormControl
            aria-label="Name"
            value={product.name}
            readOnly
            type="text"
            placeholder="Burger"
          />
        </Col>
        <Col xs={12} md={2}>
          <FormControl
            aria-label="Amount"
            value={product.amount}
            readOnly
            type="number"
            placeholder="10"
          />
        </Col>
        <Col md={2}>
          <Button style={{ margin: "5px" }} onClick={handleGetEditProductClick}>
            Edit
          </Button>
          <Button onClick={handleDeleteProductClick}>Delete</Button>
        </Col>
      </Row>
    </>
  )
}

export default ProductItem
