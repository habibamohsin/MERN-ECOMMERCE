import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const image =
    product.images && product.images.length > 0
      ? product.images[0]
      : "https://via.placeholder.com/250x200?text=No+Image";

  return (
    <div
      style={{
        width: "260px",
        background: "#fff",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h2 style={{ marginTop: "10px" }}>{product.name}</h2>

      <p>{product.description}</p>

      <h3>Rs. {product.price}</h3>

      <Link to={`/product/${product._id}`}>
        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;