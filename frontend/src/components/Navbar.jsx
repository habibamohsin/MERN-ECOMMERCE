import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#222",
        color: "#fff",
      }}
    >
      <h2>MERN Shop</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
          Login
        </Link>

        <Link to="/register" style={{ color: "#fff", textDecoration: "none" }}>
          Register
        </Link>

        <Link to="/cart" style={{ color: "#fff" }}>
          <FaShoppingCart size={22} />
        </Link>

        <FaUser size={20} />
      </div>
    </nav>
  );
}

export default Navbar;