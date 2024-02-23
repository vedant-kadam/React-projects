import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "product1",
    title: "product1",
    price: 1212,
    description: "Its a very noice prdoduct",
  },
  {
    id: "p2",
    name: "product2",
    title: "product2",
    price: 12,
    description: "Its a very Bad prdoduct",
  },
  {
    id: "p3",
    name: "product3",
    title: "product3",
    price: 56,
    description: "Its a very Medicour prdoduct likeme",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
