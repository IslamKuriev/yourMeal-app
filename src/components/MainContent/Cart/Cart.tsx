import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.scss"
import { RootState } from "../../../app/store";
import { cleanCart, decrement, increment } from "../../../features/shopReducer";
import { useState } from "react";
const Cart = () => {
    const cartEl = useSelector((state: RootState) => state.cartItems);
    const products = useSelector((state: RootState) => state.products);
    const [modal, setModal] = useState<boolean>(false)

    const dispatch = useDispatch();

    const totatPrice = cartEl.map((c) => {
        const product = products.find((p) => c.productId === p.id)
        if(!product) return 0
        return c.amount * product.price
    })
    .reduce((a,b) => a += b,0)

    const handleInc = (id: number) => {
        dispatch(increment(id))
    }
    const handleDec = (id: number) => {
        dispatch(decrement(id))
    }
    const handleModal = () => {
        setModal(true)
        dispatch(cleanCart())
    }
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className={styles.cartText}>Корзина</div>
            <span className={styles.cartLength}>{cartEl.length}</span>
            </div>
            {/* <div className={styles.products}> */}
           {cartEl.length ? cartEl.map((c) => {
            return products.map((product) => {
                if(product.id === c.productId) {
                     return (
                        <div className={styles.product} key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.CartInfo}>
                    <div>{product.name}</div>
                    <span>{product.cal}г</span>
                     <br />
                    <strong>{product.price}₽</strong>
                    </div>
                    <div className={styles.btnOption}>
                        <button onClick={() => handleInc(product.id)}>+</button>
                        <span>{c.amount}</span>
                        <button onClick={() => handleDec(product.id)}>-</button>
                    </div>
                      </div>
                )
                }
            })            
           }): <h3>Тут пока пусто :(</h3>}
           {/* </div> */}
           <div>
           <div className={styles.totalBlock}>
            <div>Итого</div>
            <div>{totatPrice}₽</div>
           </div>
           <button className={styles.design} onClick={handleModal} disabled={!cartEl.length}>Оформить заказ</button>
           <div style={{display: "flex", alignItems: "center", paddingTop: "9px"}}>
            <img src="/src/icons/freeEat.svg" alt="" /> Бесплатная доставка
           </div>
        </div>          
            {modal && (
            <div className={styles.modal}>
            <div>Успешно выполнен!</div>
            <button onClick={() => setModal(false)}><img src="/src/icons/reject.png" alt="" /></button>
            </div>
            )}
        </div>
    );
};

export default Cart;