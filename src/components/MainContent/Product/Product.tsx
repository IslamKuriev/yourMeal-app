import { useDispatch, useSelector } from "react-redux";
import styles from "./product.module.scss";
import { RootState } from "../../../app/store";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../features/shopReducer";
const Product = () => {
  const { categoryId } = useParams();
  const products = useSelector((state: RootState) =>
    state.products.filter((product) => {
      if (!categoryId) return true;

      return product.categoryId === Number(categoryId);
    })
  );
  const cartEl = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();
  const handleAddToCart = (id: number) => {
    dispatch(
      addToCart({
        id: cartEl.length + 1,
        productId: id,
        amount: 1,
      })
    );
  };
  return (
    <div className={styles.products}>
      {products.map((product) => {
        const isInCart = cartEl.find((c) => c.productId === product.id);
        return (
          <div className={styles.product} key={product.id}>
            <img src={`${product.image}`} alt="" />
            <br />
            <div>{product.price}₽</div>
            <div className={styles.price}>{product.name}</div>
            <br />
            <div className={styles.gram}>{product.cal}г</div>
            <button onClick={() => !isInCart && handleAddToCart(product.id)}>
              {isInCart ? "Уже в корзине" : "Добавьте в корзину"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
