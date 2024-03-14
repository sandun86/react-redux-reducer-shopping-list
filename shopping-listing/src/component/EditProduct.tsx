import { useDispatch } from "react-redux"
import React, { useState, useEffect } from "react"
import { Button, Col, Form, FormControl, Row } from "react-bootstrap"
import { Product, editProduct as updateProduct } from "../store/productSlice"
import ShowError from "./ShowError"
import LineBreaker from "./LineBreaker"

type EditProductProps = {
  editProduct: Product
  setEditProduct: (editProduct: Product) => void
}

const EditProduct = ({ editProduct, setEditProduct }: EditProductProps) => {
  const dispatch = useDispatch()
  const [productName, setProductName] = useState<string>("")
  const [productAmount, setProductAmount] = useState<string>("")
  const [error, setError] = useState("")

  useEffect(() => {
    setProductName(editProduct.name)
    setProductAmount(editProduct.amount)
  }, [editProduct])

  const handleEditProductSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (productName.trim() === "" || productName === undefined) {
      setError("Product name is required")
    } else if (productAmount === undefined || Number(productAmount) === 0) {
      setError("Product amount is required")
    } else if (Number(productAmount) === 0 || Number(productAmount) < 0) {
      setError("Product amount should be valid")
    } else {
      dispatch(
        updateProduct({
          editedProduct: {
            ...editProduct,
            name: productName,
            amount: productAmount,
          },
        }),
      )
      setEditProduct({ id: 0, name: "", amount: "" })
      setProductName("")
      setProductAmount("")
    }
  }

  return (
    <>
      <Row>
        <Col xs={12} md={4}>
          <Form.Label style={{ fontSize: "16px", fontWeight: "bold" }}>
            Edit Product
          </Form.Label>
        </Col>
      </Row>
      <LineBreaker/>
      <Row>{error ? <ShowError error={error} /> : ""}</Row>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={4}>
          <FormControl
            aria-label="Name"
            value={productName || ""}
            type="text"
            placeholder="Product Name"
            onChange={e => setProductName(e.target.value)}
          />
        </Col>
        <Col xs={12} md={2}>
          <FormControl
            aria-label="Amount"
            value={productAmount}
            type="number"
            placeholder="Amount"
            onChange={e => Number(setProductAmount(e.target.value))}
          />
        </Col>
        <Col md={2}>
          <Button onClick={handleEditProductSubmit}>Edit</Button>
        </Col>
      </Row>
    </>
  )
}

export default EditProduct
