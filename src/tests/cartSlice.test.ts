import cartReducer, { addItem, removeItem, updateQuantity, clearCart, resetCart, CartItem } from '../store/cartSlice';
import { beforeEach, describe, it, expect } from '@jest/globals';

const item: CartItem = {
  meal: 'pizza',
  img: 'pizza.jpg',
  id: '1',
  name: 'Pizza',
  price: 100,
  quantity: 1,
};

describe('cartSlice', () => {
  it('Return new state', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual({ items: [], total: 0 });
  });

  describe('addItem', () => {
    it('Add new item', () => {
      const state = cartReducer(undefined, addItem(item));
      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toEqual(item);
      expect(state.total).toBe(100);
    });

    it('увеличивает количество, если товар уже есть', () => {
      const state1 = cartReducer(undefined, addItem(item));
      const state2 = cartReducer(state1, addItem({ ...item, quantity: 2 }));
      expect(state2.items).toHaveLength(1);
      expect(state2.items[0].quantity).toBe(3);
      expect(state2.total).toBe(300);
    });
  });

  describe('removeItem', () => {
    it('удаляет товар по id', () => {
      const state1 = cartReducer(undefined, addItem(item));
      const state2 = cartReducer(state1, removeItem('1'));
      expect(state2.items).toHaveLength(0);
      expect(state2.total).toBe(0);
    });
  });

  describe('updateQuantity', () => {
    it('обновляет количество товара', () => {
      const state1 = cartReducer(undefined, addItem(item));
      const state2 = cartReducer(state1, updateQuantity({ id: '1', quantity: 5 }));
      expect(state2.items[0].quantity).toBe(5);
      expect(state2.total).toBe(500);
    });

    it('удаляет товар, если количество стало 0', () => {
      const state1 = cartReducer(undefined, addItem(item));
      const state2 = cartReducer(state1, updateQuantity({ id: '1', quantity: 0 }));
      expect(state2.items).toHaveLength(0);
      expect(state2.total).toBe(0);
    });
  });

  describe('clearCart', () => {
    it('очищает корзину', () => {
      const state1 = cartReducer(undefined, addItem(item));
      const state2 = cartReducer(state1, clearCart());
      expect(state2.items).toHaveLength(0);
      expect(state2.total).toBe(0);
    });
  });
});