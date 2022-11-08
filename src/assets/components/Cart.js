const Cart = ({cart, setCart}) => {
    let total = 0;
    return (
        <>
            {cart.map((elem, index)=>{
                return (
                    <div className="cart-detail" key={elem.id}>
                        <button onClick={()=>{
                            const newCart = [...cart];
                            if (newCart[index].quantity >1){
                                newCart[index].quantity--;
                                setCart(newCart);
                            } else {
                                newCart.splice(index, 1);
                                setCart(newCart);
                            }
                        }}>-</button>
                        <p>{elem.quantity}</p>
                        <button onClick={()=>{
                            const newCart = [...cart];
                            newCart[index].quantity++;
                            setCart(newCart);
                        }}>+</button>
                        <p>{elem.title}</p>
                        <p>{(elem.price * elem.quantity).toFixed(2)}€</p>
                        <span style={{display: "none"}}>{total = total + (elem.price * elem.quantity)}</span>
                    </div>
                );
            })}
            {cart.length > 0 &&
                <div>
                    <p>Sous-total {total.toFixed(2)}€</p>
                    <p>Frais de livraison 2.50€</p>
                    <p>Total {(total + 2.5).toFixed(2)}€</p>
                </div>
            }
            
        </>
    );
};


export default Cart;