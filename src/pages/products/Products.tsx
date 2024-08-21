import { useEffect } from "react";
import { useProductStore } from "../../app/productStore";

const Products = () => {
  const { loading, products, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      {products.length > 0 ? (
        <div>
          {products.map((product, i) => (
            <div key={product.id}>
              {i + 1}. {product.title}
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      ) : !loading && !error ? (
        <h2>No products available</h2>
      ) : null}
    </div>
  );
};

export default Products;
