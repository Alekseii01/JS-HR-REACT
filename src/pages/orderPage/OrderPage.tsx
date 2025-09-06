import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeItem, updateQuantity, clearCart } from "../../store/cartSlice";
import { CiTrash } from "react-icons/ci";
import "./orderPage.css";

const OrderPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.items) || [];
    const totalAmount = useAppSelector((state) => state.cart.total);
    
    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };
    
    const handleUpdateQuantity = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };
    
    const handleClearCart = () => {
        if (window.confirm("Are you sure you want to clear your cart?")) {
            dispatch(clearCart());
        }
    };

    if (cart.length === 0) {
        return (
            <section className="order-page empty-cart">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <Link to="/menu">
                    <Button>Browse Menu</Button>
                </Link>
            </section>
        );
    }

    return (
        <section className="order-page">
            <h1>Your Order</h1>
            
            <div className="order-items">
                <div className="cart-header">
                    <h3 className="cart-header-item">Item</h3>
                    <h3 className="cart-header-price">Price</h3>
                    <h3 className="cart-header-quantity">Quantity</h3>
                    <h3 className="cart-header-subtotal">Subtotal</h3>
                    <h3 className="cart-header-actions">Actions</h3>
                </div>
                
                <div className="cart-items-list">
                    {cart.map((item) => (
                        <article key={item.id} className="cart-item">
                            <div className="item-info">
                                {item.img && (
                                    <img src={item.img} alt={item.name} className="item-image" />
                                )}
                                <div className="item-details">
                                    <h4>{item.meal}</h4>
                                </div>
                            </div>
                            
                            <div className="item-price">${item.price.toFixed(2)}</div>
                            
                            <div className="quantity-controls">
                                <button 
                                    className="quantity-btn"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <span className="quantity">{item.quantity}</span>
                                <button 
                                    className="quantity-btn"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                            
                            <div className="item-subtotal">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            
                            <div className="item-actions">
                                <button 
                                    className="remove-btn"
                                    onClick={() => handleRemoveItem(item.id)}
                                    aria-label={`Remove ${item.name} from cart`}
                                >
                                    <CiTrash />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className="cart-total">
                    <h3 className="total-label">Total</h3>
                    <p className="total-amount">${totalAmount.toFixed(2)}</p>
                </div>
            </div>
            
            <div className="cart-actions">
                <Button variant="secondary" onClick={handleClearCart}>
                    Clear Cart
                </Button>
                <div className="checkout-actions">
                    <Link to="/menu">
                        <Button variant="secondary">Continue Shopping</Button>
                    </Link>
                    <Link to="/checkout">
                        <Button>Proceed to Checkout</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;
