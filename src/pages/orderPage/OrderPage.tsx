import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeItem, updateQuantity, clearCart } from "../../store/cartSlice";
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
        if (window.confirm('Are you sure you want to clear your cart?')) {
            dispatch(clearCart());
        }
    };

    if (cart.length === 0) {
        return (
            <div className="order-page empty-cart">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <Link to="/menu">
                    <Button>Browse Menu</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="order-page">
            <h1>Your Order</h1>
            
            <div className="order-items">
                <div className="cart-header">
                    <div className="cart-header-item">Item</div>
                    <div className="cart-header-price">Price</div>
                    <div className="cart-header-quantity">Quantity</div>
                    <div className="cart-header-subtotal">Subtotal</div>
                    <div className="cart-header-actions">Actions</div>
                </div>
                
                <div className="cart-items-list">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-info">
                                {item.img && (
                                    <img src={item.img} alt={item.name} className="item-image" />
                                )}
                                <div className="item-details">
                                    <h3>{item.meal}</h3>
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
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="cart-total">
                    <div className="total-label">Total</div>
                    <div className="total-amount">${totalAmount.toFixed(2)}</div>
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
        </div>
    );
};

export default OrderPage;