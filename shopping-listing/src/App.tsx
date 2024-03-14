import "./styles/App.css"
import logo from "./assets/logo.png"
import { useEffect, useState } from "react"
import { Card, Form, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import AddProduct from "./component/AddProduct"
import ProductList from "./component/ProductList"
import { type RootState } from "./store/store"
import EditProduct from "./component/EditProduct"
import LineBreaker from "./component/LineBreaker"
import { generateRandomItemList } from "./utils"
import { Product, addProducts } from "./store/productSlice"

const App = () => {
  const products = useSelector((state: RootState) => state.products.products)

  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const getEditProduct = (editProduct: Product) => setEditProduct(editProduct)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProducts(generateRandomItemList()))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Card style={{ width: "100rem" }}>
          <Card.Body>
            <Card.Title>Shopping List</Card.Title>
            <LineBreaker />
            <Row>
              <Col></Col>
              <Col>
                <Form.Label style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Product Name
                </Form.Label>
              </Col>
              <Col>
                <Form.Label style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Amount
                </Form.Label>
              </Col>
              <Col></Col>
            </Row>
            <ProductList
              products={products}
              getEditProduct={getEditProduct}
              setEditProduct={setEditProduct}
              editProduct={editProduct}
            />
            <LineBreaker />
            {editProduct?.id ? (
              <EditProduct
                editProduct={editProduct}
                setEditProduct={setEditProduct}
              />
            ) : (
              <AddProduct />
            )}
          </Card.Body>
        </Card>
      </header>
    </div>
  )
}

export default App
