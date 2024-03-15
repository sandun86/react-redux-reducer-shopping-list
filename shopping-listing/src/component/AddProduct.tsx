import ShowError from "./ShowError";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../store/productSlice"
import { Button, Col, Form, FormControl, Row } from "react-bootstrap"

const AddProduct = () => {
  const dispatch = useDispatch()

  const [productName, setProductName] = useState<string>("")
  const [productAmount, setProductAmount] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (productName === "" || productName === undefined) {
      setError("Product name is required")
    } else if (
      productAmount == "" ||
      productAmount === undefined ||
      Number(productAmount) === 0
    ) {
      setError("Product amount is required")
    } else if (Number(productAmount) === 0 || Number(productAmount) < 0) {
      setError("Product amount should be valid")
    } else {
      dispatch(
        addProduct({
          id: uuidv4(),
          name: productName,
          amount: productAmount,
        }),
      )
      setProductName("")
      setProductAmount("")
      setError("")
    }
  }

  return (
    <div>
      <Row>
        <Col xs={12} md={4}>
          <Form.Label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Add New Products
          </Form.Label>
        </Col>
      </Row>
      <Row style={{ margin: "auto", width: "90%" }}>
        <div
          style={{
            border: "1px solid",
            color: "var(--bs-border-color-translucent)",
            marginBottom: "5px",
          }}
        ></div>
      </Row>
      <Row>{error ? <ShowError error={error} /> : ""}</Row>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={4}>
          <FormControl
            type="text"
            value={productName}
            placeholder="Burger"
            name="productName"
            onChange={e => setProductName(e.target.value)}
          />
        </Col>
        <Col xs={12} md={2}>
          <FormControl
            value={productAmount}
            type="number"
            placeholder="10.00"
            name="amount"
            onChange={e => Number(setProductAmount(e.target.value))}
          />
        </Col>
        <Col md={2}>
          <Button onClick={handleSubmit}>Add</Button>
        </Col>
      </Row>
    </div>
  )
}

export default AddProduct
