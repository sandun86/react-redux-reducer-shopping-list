type ErrorProps = {
  error: string
}

const ShowError = ({ error }: ErrorProps) => {
  return (
    <div
      style={{
        width: '45%',
      }}
    >
      <span       style={{
        fontSize: "12px",
      }} className="badge bg-danger">{error}</span>
    </div>
  )
}

export default ShowError
