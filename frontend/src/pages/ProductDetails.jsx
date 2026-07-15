import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data.product);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <img
        src={
          product.images?.length > 0
            ? product.images[0]
            : "https://via.placeholder.com/300x250?text=No+Image"
        }
        alt={product.name}
        style={{
          width: "300px",
          borderRadius: "10px",
        }}
      />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h2>Rs. {product.price}</h2>

      <p>Stock: {product.stock}</p>

      <p>Rating: {product.ratings}</p>
    </div>
  );
}

export default ProductDetails;