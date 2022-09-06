import { Link,useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const {productId} = useParams()
  const product = products.find((product)=>product.id === productId)
  return (
    <section className='section product'>
      <h5>{product.name}</h5>
      <img src={product.image} alt={product.name} />
      <Link to={'/products'}>Back to products</Link>
    </section>
  );
};

export default SingleProduct;
