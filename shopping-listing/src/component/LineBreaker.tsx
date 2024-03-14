import { Row } from "react-bootstrap"

const LineBreaker = () => {
  return (
    <Row style={{ margin: "auto", width: "90%" }}>
      <div
        style={{
          border: "1px solid",
          color: "var(--bs-border-color-translucent)",
          marginBottom: "5px",
        }}
      ></div>
    </Row>
  )
}

export default LineBreaker
