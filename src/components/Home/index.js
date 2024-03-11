import { Link } from "react-router-dom";
import "./index.css"
const Home = () => (
    <div className="homeSection">
        <h1>Welcome to our Store!</h1>
        <button><Link to="/products" className="products">Products</Link></button>
    </div>
);
export default Home