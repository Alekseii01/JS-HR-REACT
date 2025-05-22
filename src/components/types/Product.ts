export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  instructions: string;
  meal: string;
  img: string;
  quantity?: number;
  [key: string]: any;
}

export type CartItem = {
  quantity: number;
};
